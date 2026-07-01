# Резюме-лендинг с трекингом переходов

Статический сайт для **авторизованного** security awareness / phishing-тестирования.
Лендинг маскируется под резюме сисадмина/DevOps, а в фоне логирует, кто перешёл по
персональной ссылке (токен + cookie + гео по IP). Отчёт — в `admin.html`.

> ⚠️ Использовать только с согласия участников/руководства. Публикация имён и email —
> персональные данные (GDPR / 152-ФЗ). Это инструмент для внутреннего тестирования.

## Как это работает

1. `generate.html` — из списка `Имя; email; пол` создаёт уникальные токены и ссылки
   вида `https://imurd.github.io/?id=abc123`, сохраняет получателей в базу.
2. Ты рассылаешь каждому его персональную ссылку.
3. При переходе `index.html` показывает резюме, а `tracker.js`:
   - читает токен из `?id=`, кладёт его в cookie (узнавание при повторных заходах без токена);
   - определяет страну по IP;
   - пишет запись о визите в Supabase.
4. `admin.html` сводит всё в таблицу: **имя, email, пол, страна, первый/последний переход, число переходов**.

## Настройка Supabase (5 минут, бесплатно)

1. Заведи проект на https://supabase.com → New project.
2. SQL Editor → выполни:

```sql
create table recipients (
  token text primary key,
  name  text,
  email text,
  gender text
);

create table visits (
  id bigint generated always as identity primary key,
  token text,
  ip text,
  city text,
  region text,
  country text,
  isp text,
  user_agent text,
  referrer text,
  visited_at timestamptz default now()
);

-- RLS: anon может только вставлять, читать нельзя (читаем в admin по service_role)
alter table recipients enable row level security;
alter table visits enable row level security;

create policy anon_insert_recipients on recipients for insert to anon with check (true);
create policy anon_insert_visits     on visits     for insert to anon with check (true);
```

3. Settings → API: скопируй **Project URL** и **anon public** ключ в `config.js`.
   **service_role** ключ никуда не вставляй в код — его вводишь прямо в `admin.html`
   при просмотре отчёта (хранится только во вкладке браузера).

## Публикация на GitHub Pages

Файлы уже в корне репозитория `imurd.github.io`. Просто:

```
git add -A && git commit -m "resume landing + tracker" && git push
```

Через минуту сайт живёт на https://imurd.github.io/.

## Ограничения (важно понимать)

- Cookie — **first-party**: сайт НЕ читает данные с других сайтов (Google, VK и т.п.).
  Имя/пол/email берутся из твоего списка по токену, а не «вытаскиваются из браузера».
- Cookie живёт в одном браузере → без Supabase общую таблицу собрать нельзя.
- Если человек чистит cookie и заходит без `?id=`, он залогируется как `anon-...`.
