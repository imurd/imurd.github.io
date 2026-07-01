// ---- Логирование посещения: токен из ссылки -> cookie -> Supabase ----
// Пассивный сбор (без запроса разрешений) + атрибуция источника.
(function () {
  var C = window.CONFIG || {};
  if (!C.SUPABASE_URL || C.SUPABASE_URL.indexOf("YOUR_PROJECT") === 0) return; // не настроено

  // --- cookie ---
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

  // --- парсер OS / браузера / типа устройства из user-agent ---
  function parseUA(ua) {
    var os = "неизв.", br = "неизв.", dev = "desktop";
    if (/Windows NT 10/.test(ua)) os = "Windows 10/11";
    else if (/Windows NT/.test(ua)) os = "Windows";
    else if (/iPhone|iPad|iPod/.test(ua)) { os = "iOS"; dev = "mobile"; }
    else if (/Android/.test(ua)) { os = "Android"; dev = "mobile"; }
    else if (/Mac OS X/.test(ua)) os = "macOS";
    else if (/Linux/.test(ua)) os = "Linux";
    if (/Edg\//.test(ua)) br = "Edge";
    else if (/OPR\//.test(ua)) br = "Opera";
    else if (/Chrome\//.test(ua)) br = "Chrome";
    else if (/Firefox\//.test(ua)) br = "Firefox";
    else if (/Safari\//.test(ua)) br = "Safari";
    if (/Mobi|Tablet/.test(ua) && dev === "desktop") dev = "mobile";
    return { os: os, browser: br, device: dev };
  }

  // 1. Токен: из ?id= или из cookie
  var params = new URLSearchParams(window.location.search);
  var token = params.get("id");
  var known = C.COOKIE_NAME || "vt";
  if (token) setCookie(known, token, C.COOKIE_DAYS || 365);
  else token = getCookie(known);
  if (!token) {
    token = "anon-" + Math.random().toString(36).slice(2, 10);
    setCookie(known, token, C.COOKIE_DAYS || 365);
  }

  // 2. Клиентские данные (без разрешений)
  var uaInfo = parseUA(navigator.userAgent);
  var nav = navigator;
  var conn = nav.connection || {};
  var browserTz = "";
  try { browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}

  var client = {
    token: token,
    user_agent: nav.userAgent,
    referrer: document.referrer || null,
    os: uaInfo.os,
    browser: uaInfo.browser,
    device_type: uaInfo.device,
    screen: (screen.width + "x" + screen.height + "@" + (window.devicePixelRatio || 1) + "x"),
    viewport: (window.innerWidth + "x" + window.innerHeight),
    timezone: browserTz || null,
    languages: (nav.languages ? nav.languages.join(",") : nav.language) || null,
    cpu_cores: nav.hardwareConcurrency || null,
    device_memory: nav.deviceMemory || null,
    connection: conn.effectiveType || null,
    dnt: (nav.doNotTrack || window.doNotTrack || nav.msDoNotTrack || null)
  };

  // 3. Гео + атрибуция по IP (ipwho.is, без ключа)
  function send(extra) {
    var body = {};
    for (var k in client) body[k] = client[k];
    if (extra) for (var j in extra) body[j] = extra[j];
    fetch(C.SUPABASE_URL + "/rest/v1/visits", {
      method: "POST",
      headers: {
        "apikey": C.SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + C.SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(body)
    }).catch(function () {});
  }

  fetch("https://ipwho.is/")
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || d.success === false) { send(null); return; }
      var c = d.connection || {};
      var tzIp = (d.timezone && d.timezone.id) ? d.timezone.id : null;
      // эвристика VPN/proxy: часовой пояс браузера не совпадает с поясом по IP
      var vpn = !!(browserTz && tzIp && browserTz !== tzIp);
      send({
        ip: d.ip || null,
        city: d.city || null,
        region: d.region || null,
        country: d.country || null,
        isp: c.isp || c.org || null,
        asn: c.asn ? ("AS" + c.asn) : null,
        org: c.org || null,
        domain: c.domain || null,
        tz_ip: tzIp,
        vpn_suspect: vpn
      });
    })
    .catch(function () { send(null); });
})();
