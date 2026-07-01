// ---- Логирование посещения: токен из ссылки -> cookie -> Supabase ----
(function () {
  var C = window.CONFIG || {};
  if (!C.SUPABASE_URL || C.SUPABASE_URL.indexOf("YOUR_PROJECT") === 0) return; // не настроено

  // --- работа с cookie ---
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + "=" + encodeURIComponent(value) +
      ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
  }
  function getCookie(name) {
    var m = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
    return m ? decodeURIComponent(m.pop()) : null;
  }

  // 1. Токен: сначала из ?id= в ссылке, иначе из cookie
  var params = new URLSearchParams(window.location.search);
  var token = params.get("id");
  var known = C.COOKIE_NAME || "vt";

  if (token) {
    setCookie(known, token, C.COOKIE_DAYS || 365);        // запоминаем на будущее
  } else {
    token = getCookie(known);                             // повторный визит без ?id=
  }
  if (!token) token = "anon-" + Math.random().toString(36).slice(2, 10);

  // 2. Гео по IP (бесплатно, без ключа): IP, город, регион, страна, провайдер
  function logVisit(geo) {
    geo = geo || {};
    var conn = geo.connection || {};
    fetch(C.SUPABASE_URL + "/rest/v1/visits", {
      method: "POST",
      headers: {
        "apikey": C.SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + C.SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        token: token,
        ip: geo.ip || null,
        city: geo.city || null,
        region: geo.region || null,
        country: geo.country || null,
        isp: conn.isp || conn.org || null,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null
      })
    }).catch(function () { /* тихо игнорируем */ });
  }

  fetch("https://ipwho.is/")
    .then(function (r) { return r.json(); })
    .then(function (d) { logVisit(d && d.success !== false ? d : null); })
    .catch(function () { logVisit(null); });
})();
