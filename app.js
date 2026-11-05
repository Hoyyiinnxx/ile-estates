(function () {
  "use strict";

  var L_ALL = window.ILE_LISTINGS, AREAS = window.ILE_AREAS, WA = window.ILE_WHATSAPP, WA_L = window.ILE_WHATSAPP_LABEL, MAIL = window.ILE_EMAIL;
  var app = document.getElementById("app"), hd = document.getElementById("hd");
  var fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  var rmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var maps = [], cleanups = [];

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function img(id, w) { return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&q=70&w=" + w; }
  function srcset(id, ws) { return ws.map(function (w) { return img(id, w) + " " + w + "w"; }).join(", "); }
  function area(id) { for (var i = 0; i < AREAS.length; i++) if (AREAS[i].id === id) return AREAS[i]; return { name: id }; }
  function byId(id) { for (var i = 0; i < L_ALL.length; i++) if (L_ALL[i].id === id) return L_ALL[i]; return null; }
  function money(n) {
    if (n >= 1e9) return "₦" + (+(n / 1e9).toFixed(2)) + "B";
    if (n >= 1e6) return "₦" + (+(n / 1e6).toFixed(1)) + "M";
    return "₦" + n.toLocaleString("en-NG");
  }
  function priceHTML(l) { return money(l.price) + (l.deal === "rent" ? "<small>/yr</small>" : ""); }
  function priceText(l) { return money(l.price) + (l.deal === "rent" ? " a year" : ""); }
  function waLink(msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); }
  function enquiry(l) {
    return "Hello Ilé Estates, I'm interested in \"" + l.title + "\" (" + l.ref + ") in " + area(l.area).name +
      ", listed at " + priceText(l) + ". Is it still available?\n" + location.origin + location.pathname + "#/property/" + l.id;
  }
  function mailLink(subj, body) { return "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + (body ? "&body=" + encodeURIComponent(body) : ""); }
  function viewing(l) { return "Hello Ilé Estates, I'd like to book a viewing for \"" + l.title + "\" (" + l.ref + "). When is a good time?"; }

  var I = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18v-6.5A2.5 2.5 0 0 1 5.5 9h13A2.5 2.5 0 0 1 21 11.5V18M3 15h18M3 18v2M21 18v2M6 9V6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5V9"/></svg>',
    bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2zM6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2"/></svg>',
    size: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6M15 4h5v5M9 20H4v-5"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-9.3-9.2C1.4 7.4 3.6 4 7 4c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8C19.5 15.4 12 20 12 20z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4zM9 4v13M15 6.5v13"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v11M7.5 8.5 12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/></svg>'
  };

  /* ---------- saved homes ---------- */
  var saved = [];
  try { saved = JSON.parse(localStorage.getItem("ile:saved") || "[]"); } catch (e) { saved = []; }
  function isSaved(id) { return saved.indexOf(id) > -1; }
  function setCount(pop) {
    var c = document.getElementById("savedCount");
    c.textContent = saved.length; c.hidden = !saved.length;
    if (pop) { c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); }
  }
  function toggleSave(id) {
    var on = !isSaved(id);
    if (on) saved.push(id); else saved.splice(saved.indexOf(id), 1);
    try { localStorage.setItem("ile:saved", JSON.stringify(saved)); } catch (e) {}
    $$('[data-save="' + id + '"]').forEach(function (b) {
      b.setAttribute("aria-pressed", on); b.classList.remove("beat"); void b.offsetWidth; b.classList.add("beat");
      var t = b.querySelector(".lbl"); if (t) t.textContent = on ? "Saved" : "Save";
    });
    setCount(true);
    toast(on ? "Saved to your shortlist" : "Removed from your shortlist");
    if (!on && route().params.saved === "1" && route().path === "/listings") updateResults();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-save]");
    if (b) { e.preventDefault(); e.stopPropagation(); toggleSave(b.getAttribute("data-save")); }
  });

  var tt;
  function toast(msg) {
    var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove("show"); }, 2000);
  }

  /* ---------- pieces ---------- */
  function card(l, opts) {
    opts = opts || {};
    var a = area(l.area), on = isSaved(l.id);
    return '<article class="card" data-id="' + l.id + '"' + (opts.rv ? ' data-rv style="--d:' + (opts.d || 0) + 'ms"' : "") + '>' +
      '<a class="cl" href="#/property/' + l.id + '">' +
      '<div class="card-img"><img data-fade src="' + img(l.imgs[0], 800) + '" srcset="' + srcset(l.imgs[0], [480, 800, 1100]) + '" sizes="(min-width:900px) 33vw, 85vw" alt="" loading="lazy" decoding="async">' +
      '<span class="badge">' + (l.deal === "rent" ? "To let" : "For sale") + '</span>' +
      '<span class="price-tag">' + priceHTML(l) + '</span></div>' +
      '<div class="card-b"><h3>' + esc(l.title) + '</h3><p class="loc">' + I.pin + esc(a.name) + ', Lagos</p>' +
      '<div class="specs"><span>' + I.bed + l.beds + ' beds</span><span>' + I.bath + l.baths + ' baths</span><span>' + I.size + l.size + ' m²</span></div></div></a>' +
      '<button class="heart" type="button" data-save="' + l.id + '" aria-pressed="' + on + '" aria-label="Save ' + esc(l.title) + '">' + I.heart + '</button></article>';
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#/, "") || "/", q = h.indexOf("?"), path = q > -1 ? h.slice(0, q) : h, params = {};
    if (q > -1) h.slice(q + 1).split("&").forEach(function (kv) { if (!kv) return; var p = kv.split("="); params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ""); });
    return { path: path, params: params };
  }

  function render() {
    cleanups.forEach(function (f) { f(); }); cleanups = [];
    maps.forEach(function (m) { m.remove(); }); maps = [];
    document.body.classList.remove("has-mbar");
    closeMenu();
    var r = route(), m;
    if (r.path === "/" || r.path === "") home();
    else if (r.path === "/listings") listings(r.params);
    else if ((m = r.path.match(/^\/property\/([\w-]+)$/))) property(m[1]);
    else { location.replace("#/"); return; }
    navState(r);
    window.scrollTo(0, 0);
    afterRender();
  }
  window.addEventListener("hashchange", render);

  function navState(r) {
    var k = r.path === "/listings" ? (r.params.saved === "1" ? "saved" : r.params.view === "map" ? "map" : r.params.deal || "") : r.path === "/" ? "home" : "";
    $$(".nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-nav") === k); });
    onScroll();
  }

  /* ---------- header + menu ---------- */
  function onScroll() { hd.classList.toggle("solid", scrollY > 40 || route().path !== "/"); }
  addEventListener("scroll", onScroll, { passive: true });
  var burger = document.getElementById("burger");
  function closeMenu() { hd.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.documentElement.style.overflow = ""; }
  burger.addEventListener("click", function () {
    var o = hd.classList.toggle("open"); burger.setAttribute("aria-expanded", o);
    document.documentElement.style.overflow = o ? "hidden" : "";
  });
  document.getElementById("hdWa").href = waLink("Hello Ilé Estates, I'm looking for a home in Lagos. Can you help?");
  (function () {
    var w = document.getElementById("ftWa"), m = document.getElementById("ftMail");
    w.href = waLink("Hello Ilé Estates, I'm looking for a home in Lagos. Can you help?");
    w.textContent = "WhatsApp: " + WA_L;
    m.href = mailLink("Property enquiry"); m.textContent = MAIL;
  })();

  /* ---------- after render: images, reveals, counters ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); if (e.target.hasAttribute("data-count")) countUp(e.target); } });
  }, { threshold: .15, rootMargin: "0px 0px -5% 0px" }) : null;

  function fadeImgs(root) {
    $$("img[data-fade]:not(.ld)", root).forEach(function (im) {
      if (im.complete && im.naturalWidth) im.classList.add("ld");
      else { im.addEventListener("load", function () { im.classList.add("ld"); }, { once: true }); im.addEventListener("error", function () { im.classList.add("ld"); }, { once: true }); }
    });
  }
  function reveal(root) {
    $$("[data-rv]:not(.in), [data-count]", root).forEach(function (el) { if (io && !rmo) io.observe(el); else { el.classList.add("in"); if (el.hasAttribute("data-count")) countUp(el); } });
  }
  function countUp(el) {
    var to = parseFloat(el.getAttribute("data-count")), dec = (el.getAttribute("data-count").split(".")[1] || "").length,
      pre = el.getAttribute("data-pre") || "", suf = el.getAttribute("data-suf") || "", t0 = 0, dur = 1600;
    if (rmo) { el.textContent = pre + to.toFixed(dec) + suf; return; }
    (function f(now) { if (!t0) t0 = now; var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4); el.textContent = pre + (to * e).toFixed(dec) + suf; if (k < 1) requestAnimationFrame(f); })(performance.now());
  }
  function afterRender() { fadeImgs(app); reveal(app); app.firstElementChild && app.firstElementChild.classList.add("page"); }

  /* ---------- HOME ---------- */
  function home() {
    var newest = L_ALL.slice().sort(function (a, b) { return b.added < a.added ? -1 : 1; }).slice(0, 6);
    var counts = {}; L_ALL.forEach(function (l) { counts[l.area] = (counts[l.area] || 0) + 1; });
    var heroId = heroFor();
    app.innerHTML =
      '<div>' +
      '<section class="hero"><div class="hero-bg" id="heroBg"><img id="heroImg" src="' + img(heroId, 1600) + '" srcset="' + srcset(heroId, [800, 1200, 1600, 2200]) + '" sizes="100vw" alt="" fetchpriority="high"></div>' +
      '<div class="wrap"><span class="eyebrow">Lagos luxury property</span>' +
      '<h1><span class="ln"><span style="--i:0">Homes that</span></span><span class="ln"><span style="--i:1">match your</span></span><span class="ln"><span style="--i:2" class="gold-t">standard.</span></span></h1>' +
      '<p class="lead">Hand-picked houses, penthouses and apartments for sale and rent in Banana Island, Ikoyi, Lekki, Victoria Island and beyond.</p>' +
      '<form class="search" id="search" role="search">' +
      '<div class="seg" id="seg"><i></i><button type="button" data-deal="sale" aria-pressed="true">Buy</button><button type="button" data-deal="rent" aria-pressed="false">Rent</button></div>' +
      '<label class="fld"><span>Area</span><select name="area"><option value="">All of Lagos</option>' + AREAS.map(function (a) { return '<option value="' + a.id + '">' + esc(a.name) + "</option>"; }).join("") + '</select></label>' +
      '<label class="fld"><span>Bedrooms</span><select name="beds"><option value="">Any</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option><option value="5">5+</option></select></label>' +
      '<button class="btn gold" type="submit">Search homes ' + I.arrow + '</button></form></div></section>' +

      '<section class="sec"><div class="wrap"><div class="sec-h"><div data-rv><span class="eyebrow">New on the market</span><h2>Recently listed</h2></div>' +
      '<a class="link" data-rv href="#/listings">View all ' + L_ALL.length + ' homes ' + I.arrow + '</a></div>' +
      '<div class="rail">' + newest.map(function (l, i) { return card(l, { rv: true, d: (i % 3) * 90 }); }).join("") + '</div></div></section>' +

      '<section class="sec"><div class="wrap"><div class="sec-h"><div data-rv><span class="eyebrow">Neighbourhoods</span><h2>Where Lagos lives well</h2></div></div>' +
      '<div class="areas">' + AREAS.map(function (a, i) {
        return '<a class="area" data-rv style="--d:' + (i % 3) * 90 + 'ms" href="#/listings?area=' + a.id + '"><img data-fade src="' + img(a.img, 900) + '" srcset="' + srcset(a.img, [500, 900]) + '" sizes="(min-width:900px) 33vw, 50vw" alt="" loading="lazy" decoding="async">' +
          '<div class="area-t"><h3>' + esc(a.name) + '</h3><p>' + esc(a.blurb) + ' <b>' + (counts[a.id] || 0) + ' homes</b></p></div></a>';
      }).join("") + '</div></div></section>' +

      '<section class="sec" style="padding-top:1rem"><div class="wrap stats">' +
      '<div class="stat"><b data-count="14">0</b><span>Years in Lagos property</span></div>' +
      '<div class="stat"><b data-count="92" data-pre="₦" data-suf="B">0</b><span>In homes sold</span></div>' +
      '<div class="stat"><b data-count="340" data-suf="+">0</b><span>Families moved in</span></div>' +
      '<div class="stat"><b data-count="4.9">0</b><span>Average client rating</span></div></div></section>' +

      '<section class="sec"><div class="wrap"><div class="band" id="band" data-rv><img data-fade src="' + img("1600210492486-724fe5c67fb0", 1600) + '" alt="" loading="lazy">' +
      '<span class="eyebrow">Selling or letting?</span><h2>Let us find the right buyer for your home.</h2>' +
      '<p>We photograph, market and show your property to serious, verified buyers and tenants, and we handle the paperwork with you.</p>' +
      '<div class="acts"><a class="btn gold" target="_blank" rel="noopener" href="' + waLink("Hello Ilé Estates, I'd like to sell or let my property.") + '">' + I.wa + ' WhatsApp ' + WA_L + '</a>' +
      '<a class="btn" href="#/listings">Browse homes</a></div></div></div></section></div>';

    // search
    var form = $("#search"), seg = $("#seg"), deal = "sale";
    $$("button", seg).forEach(function (b) {
      b.addEventListener("click", function () { deal = b.getAttribute("data-deal"); seg.classList.toggle("r", deal === "rent"); $$("button", seg).forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = ["deal=" + deal]; if (form.area.value) q.push("area=" + form.area.value); if (form.beds.value) q.push("beds=" + form.beds.value);
      location.hash = "#/listings?" + q.join("&");
    });
    // band: glow follows the pointer, press feedback on touch
    var band = $("#band");
    if (band && !rmo) {
      var bmove = function (e) { var r = band.getBoundingClientRect(); band.style.setProperty("--mx", (e.clientX - r.left) + "px"); band.style.setProperty("--my", (e.clientY - r.top) + "px"); };
      band.addEventListener("pointermove", bmove); band.addEventListener("pointerdown", bmove);
    }
    // gentle parallax on desktop
    if (fine && !rmo) {
      var bg = $("#heroBg"), q2 = 0;
      var px = function () { if (q2) return; q2 = requestAnimationFrame(function () { q2 = 0; if (scrollY < innerHeight) bg.style.transform = "translateY(" + (scrollY * .3).toFixed(1) + "px)"; }); };
      addEventListener("scroll", px, { passive: true }); cleanups.push(function () { removeEventListener("scroll", px); });
    }
  }

  /* ---------- LISTINGS ---------- */
  var LP = {};
  var MAX = { sale: [["", "Any price"], ["300000000", "Up to ₦300M"], ["700000000", "Up to ₦700M"], ["1000000000", "Up to ₦1B"], ["2000000000", "Up to ₦2B"]],
    rent: [["", "Any price"], ["30000000", "Up to ₦30M/yr"], ["60000000", "Up to ₦60M/yr"], ["100000000", "Up to ₦100M/yr"]] };

  function listings(p) {
    LP = { deal: p.deal || "", area: p.area || "", beds: p.beds || "", max: p.max || "", sort: p.sort || "new", saved: p.saved === "1", view: p.view === "map" ? "map" : "grid" };
    var title = LP.saved ? "Your saved homes" : LP.deal === "rent" ? "Homes to rent" : LP.deal === "sale" ? "Homes for sale" : "All homes";
    var sub = LP.saved ? "Your shortlist stays on this device." : LP.area ? "In " + area(LP.area).name + ", Lagos." : "Across Lagos's best neighbourhoods.";
    app.innerHTML = '<div><section class="pg-top"><div class="wrap"><span class="eyebrow">Ilé Estates</span><h1 id="ltitle">' + esc(title) + '</h1><p class="muted" id="lsub">' + esc(sub) + '</p></div></section>' +
      '<div class="bar"><div class="wrap bar-in">' +
      '<div class="tog" id="tDeal" role="group" aria-label="Buy or rent"><button type="button" data-v="">All</button><button type="button" data-v="sale">Buy</button><button type="button" data-v="rent">Rent</button></div>' +
      '<label class="chip" id="cArea"><select id="fArea" aria-label="Area"><option value="">All areas</option>' + AREAS.map(function (a) { return '<option value="' + a.id + '">' + esc(a.name) + '</option>'; }).join("") + '</select></label>' +
      '<label class="chip" id="cBeds"><select id="fBeds" aria-label="Bedrooms"><option value="">Any beds</option><option value="2">2+ beds</option><option value="3">3+ beds</option><option value="4">4+ beds</option><option value="5">5+ beds</option></select></label>' +
      '<label class="chip" id="cMax"><select id="fMax" aria-label="Maximum price"></select></label>' +
      '<label class="chip" id="cSort"><select id="fSort" aria-label="Sort by"><option value="new">Newest</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="size">Largest first</option></select></label>' +
      '<button class="chip" type="button" id="fSaved" aria-pressed="false">' + I.heart.replace("<svg", '<svg fill="none" stroke="currentColor" stroke-width="1.8"') + ' Saved</button>' +
      '<span class="sp"></span>' +
      '<div class="tog" id="tView" role="group" aria-label="View"><button type="button" data-v="grid">' + I.grid + ' Grid</button><button type="button" data-v="map">' + I.map + ' Map</button></div>' +
      '</div></div><div class="wrap" id="results"></div></div>';

    var fArea = $("#fArea"), fBeds = $("#fBeds"), fMax = $("#fMax"), fSort = $("#fSort"), fSaved = $("#fSaved");
    fArea.value = LP.area; fBeds.value = LP.beds; fSort.value = LP.sort;
    function sync() {
      $$("#tDeal button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === LP.deal); });
      $$("#tView button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === LP.view); });
      var opts = MAX[LP.deal]; $("#cMax").hidden = !opts;
      if (opts) { fMax.innerHTML = opts.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + "</option>"; }).join(""); fMax.value = LP.max; if (fMax.value !== LP.max) LP.max = ""; }
      else LP.max = "";
      $("#cArea").classList.toggle("on", !!LP.area); $("#cBeds").classList.toggle("on", !!LP.beds); $("#cMax").classList.toggle("on", !!LP.max);
      fSaved.setAttribute("aria-pressed", LP.saved);
      $("#ltitle").textContent = LP.saved ? "Your saved homes" : LP.deal === "rent" ? "Homes to rent" : LP.deal === "sale" ? "Homes for sale" : "All homes";
      $("#lsub").textContent = LP.saved ? "Your shortlist stays on this device." : LP.area ? "In " + area(LP.area).name + ", Lagos." : "Across Lagos's best neighbourhoods.";
    }
    function change() { sync(); writeURL(); updateResults(); }
    $$("#tDeal button").forEach(function (b) { b.addEventListener("click", function () { LP.deal = b.getAttribute("data-v"); LP.max = ""; change(); }); });
    $$("#tView button").forEach(function (b) { b.addEventListener("click", function () { LP.view = b.getAttribute("data-v"); change(); }); });
    fArea.addEventListener("change", function () { LP.area = fArea.value; change(); });
    fBeds.addEventListener("change", function () { LP.beds = fBeds.value; change(); });
    fMax.addEventListener("change", function () { LP.max = fMax.value; change(); });
    fSort.addEventListener("change", function () { LP.sort = fSort.value; change(); });
    fSaved.addEventListener("click", function () { LP.saved = !LP.saved; change(); });
    sync(); updateResults();
  }

  function writeURL() {
    var q = [];
    if (LP.deal) q.push("deal=" + LP.deal); if (LP.area) q.push("area=" + LP.area); if (LP.beds) q.push("beds=" + LP.beds);
    if (LP.max) q.push("max=" + LP.max); if (LP.sort !== "new") q.push("sort=" + LP.sort); if (LP.saved) q.push("saved=1"); if (LP.view === "map") q.push("view=map");
    history.replaceState(null, "", "#/listings" + (q.length ? "?" + q.join("&") : ""));
    navState(route());
  }

  function filtered() {
    var out = L_ALL.filter(function (l) {
      return (!LP.deal || l.deal === LP.deal) && (!LP.area || l.area === LP.area) && (!LP.beds || l.beds >= +LP.beds) &&
        (!LP.max || l.price <= +LP.max) && (!LP.saved || isSaved(l.id));
    });
    var s = { new: function (a, b) { return a.added < b.added ? 1 : -1; }, low: function (a, b) { return a.price - b.price; }, high: function (a, b) { return b.price - a.price; }, size: function (a, b) { return b.size - a.size; } }[LP.sort];
    return out.sort(s);
  }

  function updateResults() {
    var res = $("#results"); if (!res) return;
    maps.forEach(function (m) { m.remove(); }); maps = [];
    var list = filtered();
    if (!list.length) {
      res.innerHTML = '<div class="empty page"><h3>' + (LP.saved ? "No saved homes yet" : "No homes match") + '</h3><p class="muted">' +
        (LP.saved ? "Tap the heart on any home to add it to your shortlist." : "Try a different area or widen your price range.") +
        '</p><a class="btn gold" href="#/listings">See all homes</a></div>';
      return;
    }
    var countTxt = '<p class="count">' + list.length + (list.length === 1 ? " home" : " homes") + "</p>";
    if (LP.view === "map") {
      res.innerHTML = countTxt + '<div class="mapv page"><div class="list">' + list.map(function (l) { return card(l); }).join("") + '</div><div class="map" id="map" role="region" aria-label="Map of listings"></div></div>';
      fadeImgs(res);
      bigMap(list);
    } else {
      res.innerHTML = countTxt + '<div class="grid page" style="margin-bottom:4rem">' + list.map(function (l, i) { return card(l, { rv: true, d: (i % 3) * 80 }); }).join("") + "</div>";
      fadeImgs(res); reveal(res);
    }
  }

  /* ---------- maps (Leaflet, loaded on demand) ---------- */
  var leafletP = null;
  function leaflet() {
    if (window.L) return Promise.resolve(window.L);
    if (leafletP) return leafletP;
    leafletP = new Promise(function (ok, no) {
      var c = document.createElement("link"); c.rel = "stylesheet"; c.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(c);
      var s = document.createElement("script"); s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; s.onload = function () { ok(window.L); }; s.onerror = no; document.head.appendChild(s);
    });
    return leafletP;
  }
  function baseMap(el, opts) {
    var m = L.map(el, Object.assign({ zoomControl: true, scrollWheelZoom: false, attributionControl: true }, opts || {}));
    m._ileBase = L.tileLayer(tileUrl("Base"), { maxZoom: 16, attribution: 'Tiles &copy; Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(m);
    m._ileRef = L.tileLayer(tileUrl("Reference"), { maxZoom: 16 }).addTo(m);
    maps.push(m); return m;
  }
  function bigMap(list) {
    var el = $("#map");
    leaflet().then(function (L) {
      if (!document.body.contains(el)) return;
      var m = baseMap(el), pins = {}, bounds = [];
      list.forEach(function (l) {
        var mk = L.marker([l.lat, l.lng], { icon: L.divIcon({ className: "pin", html: "<b>" + money(l.price) + "</b>", iconSize: [0, 0] }), keyboard: true, title: l.title }).addTo(m);
        mk.bindPopup('<a class="pop-c" href="#/property/' + l.id + '"><img src="' + img(l.imgs[0], 480) + '" alt=""><div><b>' + priceHTML(l) + '</b><span>' + esc(l.title) + '</span></div></a>', { closeButton: false, offset: [0, -28] });
        mk.on("click", function () { hl(l.id, true); });
        pins[l.id] = mk; bounds.push([l.lat, l.lng]);
      });
      var far = function () { el.classList.toggle("far", m.getZoom() < 13); };
      m.on("zoomend", far);
      m.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 }); far();
      function hl(id, scroll) {
        $$(".mapv .card").forEach(function (c) { c.classList.toggle("hl", c.getAttribute("data-id") === id); });
        Object.keys(pins).forEach(function (k) { var e = pins[k].getElement(); if (e) e.classList.toggle("act", k === id); pins[k].setZIndexOffset(k === id ? 1000 : 0); });
        if (scroll) { var c = $('.mapv .card[data-id="' + id + '"]'); if (c) c.scrollIntoView({ behavior: rmo ? "auto" : "smooth", block: "nearest", inline: "start" }); }
      }
      $$(".mapv .card").forEach(function (c) {
        var id = c.getAttribute("data-id");
        if (fine) c.addEventListener("mouseenter", function () { hl(id); m.panTo(pins[id].getLatLng(), { animate: !rmo }); });
      });
      // on phones, the card snapped into view picks its pin
      var lst = $(".mapv .list");
      if (!fine && lst) {
        var q = 0;
        lst.addEventListener("scroll", function () {
          if (q) return; q = requestAnimationFrame(function () {
            q = 0; var x = lst.getBoundingClientRect().left, best = null, bd = 1e9;
            $$(".card", lst).forEach(function (c) { var d = Math.abs(c.getBoundingClientRect().left - x - 20); if (d < bd) { bd = d; best = c; } });
            if (best) { var id = best.getAttribute("data-id"); hl(id); m.panTo(pins[id].getLatLng(), { animate: !rmo }); }
          });
        }, { passive: true });
      }
    }).catch(function () { el.innerHTML = '<p class="muted" style="padding:2rem">The map could not load. Check your connection and try again.</p>'; });
  }

  /* ---------- PROPERTY ---------- */
  function property(id) {
    var l = byId(id);
    if (!l) {
      app.innerHTML = '<div><section class="pg-top"><div class="wrap"><div class="empty"><h3>This home is no longer listed</h3><p class="muted">It may have been sold or let.</p><a class="btn gold" href="#/listings">Browse homes</a></div></div></section></div>';
      return;
    }
    var a = area(l.area), on = isSaved(l.id);
    var similar = L_ALL.filter(function (x) { return x.id !== l.id && (x.area === l.area || x.deal === l.deal); })
      .sort(function (x, y) { return (y.area === l.area) - (x.area === l.area) || Math.abs(x.price - l.price) - Math.abs(y.price - l.price); }).slice(0, 3);
    app.innerHTML = '<div class="pp"><div class="wrap">' +
      '<a class="back" href="#/listings' + (l.deal ? "?deal=" + l.deal : "") + '">' + I.back + ' All ' + (l.deal === "rent" ? "rentals" : "homes for sale") + '</a>' +
      '<div class="gal"><div class="gal-track" id="gal">' + l.imgs.map(function (p, i) {
        return '<button type="button" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + ' of ' + l.imgs.length + '"><img src="' + img(p, i ? 900 : 1400) + '" srcset="' + srcset(p, [600, 900, 1400, 1900]) + '" sizes="' + (i ? "(min-width:900px) 25vw, 100vw" : "(min-width:900px) 50vw, 100vw") + '" alt="' + esc(l.title) + ', photo ' + (i + 1) + '"' + (i ? ' loading="lazy"' : ' fetchpriority="high"') + ' decoding="async"></button>';
      }).join("") + '</div><span class="gal-n" id="galN">1 / ' + l.imgs.length + '</span></div>' +
      '<div class="gal-dots" id="galDots">' + l.imgs.map(function (_, i) { return "<i" + (i ? "" : ' class="on"') + "></i>"; }).join("") + '</div>' +

      '<div class="pp-grid"><div>' +
      '<div class="pp-h" data-rv><span class="eyebrow">' + (l.deal === "rent" ? "To let" : "For sale") + ' · ' + esc(l.type) + '</span><h1>' + esc(l.title) + '</h1>' +
      '<p class="loc">' + I.pin + esc(a.name) + ', Lagos · Ref ' + l.ref + '</p><p class="pp-price">' + priceHTML(l) + '</p>' +
      '<div class="acts-row"><button class="heart" type="button" data-save="' + l.id + '" aria-pressed="' + on + '">' + I.heart + '<span class="lbl">' + (on ? "Saved" : "Save") + '</span></button>' +
      '<button class="btn sm" type="button" id="share">' + I.share + ' Share</button></div></div>' +
      '<div class="facts" data-rv>' +
      '<div class="fact"><span>Bedrooms</span><b>' + l.beds + '</b></div><div class="fact"><span>Bathrooms</span><b>' + l.baths + '</b></div>' +
      '<div class="fact"><span>Size</span><b>' + l.size + ' m²</b></div><div class="fact"><span>Type</span><b>' + esc(l.type) + '</b></div><div class="fact"><span>Built</span><b>' + l.year + '</b></div></div>' +
      '<div data-rv><h2>About this home</h2><p class="desc">' + esc(l.desc) + '</p></div>' +
      '<div data-rv><h2>Features</h2><ul class="ams">' + l.amenities.map(function (x) { return "<li>" + I.check + esc(x) + "</li>"; }).join("") + '</ul></div>' +
      '<div data-rv><h2>Location</h2><p class="muted" style="margin:-.4rem 0 1rem">' + esc(a.name) + ', Lagos. The exact address is shared when you book a viewing.</p><div class="minimap" id="minimap" role="region" aria-label="Map showing the area"></div></div>' +
      '</div>' +
      '<aside class="side"><div class="agent"><span class="av">A</span><div><b>Adaeze Okafor</b><span>Senior agent · replies in minutes</span></div></div>' +
      '<p class="pp-price" style="margin:0 0 1rem">' + priceHTML(l) + '</p>' +
      '<a class="btn gold" target="_blank" rel="noopener" href="' + waLink(enquiry(l)) + '">' + I.wa + ' Chat on WhatsApp</a>' +
      '<a class="btn" target="_blank" rel="noopener" href="' + waLink(viewing(l)) + '">Book a viewing</a>' +
      '<div class="side-c"><a class="btn sm" href="' + mailLink("Enquiry: " + l.title + " (" + l.ref + ")", enquiry(l)) + '">' + I.mail + ' Email</a></div>' +
      '<p class="ref">Ref ' + l.ref + ' · Listed ' + new Date(l.added).toLocaleDateString("en-GB", { day: "numeric", month: "long" }) + '</p></aside></div>' +

      (similar.length ? '<section style="margin-bottom:4rem"><div class="sec-h"><div data-rv><span class="eyebrow">You may also like</span><h2>Similar homes</h2></div></div><div class="rail">' +
        similar.map(function (x, i) { return card(x, { rv: true, d: i * 90 }); }).join("") + '</div></section>' : "") +
      '</div></div>' +
      '<div class="mbar" id="mbar"><div><b>' + priceHTML(l) + '</b><small>' + esc(a.name) + ' · ' + l.beds + ' beds</small></div><a class="btn gold sm" target="_blank" rel="noopener" href="' + waLink(enquiry(l)) + '">' + I.wa + ' WhatsApp</a></div>';

    document.body.classList.add("has-mbar");
    // gallery
    var gal = $("#gal"), galN = $("#galN"), dots = $$("#galDots i"), gq = 0;
    gal.addEventListener("scroll", function () {
      if (gq) return; gq = requestAnimationFrame(function () {
        gq = 0; var i = Math.round(gal.scrollLeft / gal.clientWidth);
        galN.textContent = (i + 1) + " / " + l.imgs.length; dots.forEach(function (d, k) { d.classList.toggle("on", k === i); });
      });
    }, { passive: true });
    $$("button", gal).forEach(function (b) { b.addEventListener("click", function () { openLB(l, +b.getAttribute("data-i"), b); }); });
    // share
    $("#share").addEventListener("click", function () {
      var url = location.href;
      if (navigator.share) navigator.share({ title: l.title, text: l.title + " · " + priceText(l), url: url }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { toast("Link copied"); });
    });
    // sticky mobile bar
    var mbar = $("#mbar"), sq = 0;
    var sb = function () { if (sq) return; sq = requestAnimationFrame(function () { sq = 0; mbar.classList.toggle("show", scrollY > 360); }); };
    addEventListener("scroll", sb, { passive: true }); cleanups.push(function () { removeEventListener("scroll", sb); });
    // mini map, loaded when close to view
    var mm = $("#minimap");
    var go = function () {
      leaflet().then(function (L) {
        if (!document.body.contains(mm)) return;
        var m = baseMap(mm, { dragging: fine, tap: false }).setView([l.lat, l.lng], 14);
        L.circle([l.lat, l.lng], { radius: 450, color: "#8c6a33", weight: 1.5, fillColor: "#c8a96e", fillOpacity: .2 }).addTo(m);
        L.marker([l.lat, l.lng], { icon: L.divIcon({ className: "pin", html: "<b>" + esc(a.name) + "</b>", iconSize: [0, 0] }) }).addTo(m);
      }).catch(function () { mm.innerHTML = '<p class="muted" style="padding:2rem">The map could not load.</p>'; });
    };
    if ("IntersectionObserver" in window) { var mo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mo.disconnect(); go(); } }, { rootMargin: "400px" }); mo.observe(mm); cleanups.push(function () { mo.disconnect(); }); }
    else go();
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lb"), lbT = document.getElementById("lbTrack"), lbC = document.getElementById("lbCount"), lbFrom = null, lbN = 0;
  function lbIdx() { return Math.round(lbT.scrollLeft / lbT.clientWidth); }
  function lbGo(i) { i = Math.max(0, Math.min(lbN - 1, i)); lbT.scrollTo({ left: i * lbT.clientWidth, behavior: rmo ? "auto" : "smooth" }); }
  function openLB(l, i, from) {
    lbFrom = from; lbN = l.imgs.length;
    lbT.innerHTML = l.imgs.map(function (p, k) { return '<figure><img src="' + img(p, 1900) + '" srcset="' + srcset(p, [900, 1400, 1900, 2600]) + '" sizes="100vw" alt="' + esc(l.title) + ', photo ' + (k + 1) + '" decoding="async"></figure>'; }).join("");
    lb.hidden = false; document.documentElement.style.overflow = "hidden";
    lbT.scrollLeft = i * lbT.clientWidth; lbC.textContent = (i + 1) + " / " + lbN;
    document.getElementById("lbX").focus();
  }
  function closeLB() { lb.hidden = true; lbT.innerHTML = ""; document.documentElement.style.overflow = ""; if (lbFrom) lbFrom.focus(); }
  lbT.addEventListener("scroll", function () { lbC.textContent = (lbIdx() + 1) + " / " + lbN; }, { passive: true });
  document.getElementById("lbX").addEventListener("click", closeLB);
  document.getElementById("lbPrev").addEventListener("click", function () { lbGo(lbIdx() - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { lbGo(lbIdx() + 1); });
  addEventListener("keydown", function (e) {
    if (lb.hidden) { if (e.key === "Escape") closeMenu(); return; }
    if (e.key === "Escape") closeLB(); else if (e.key === "ArrowRight") lbGo(lbIdx() + 1); else if (e.key === "ArrowLeft") lbGo(lbIdx() - 1);
  });

  /* ---------- theme (white + champagne by default, black + gold option) ---------- */
  var root = document.documentElement, thm = document.getElementById("thm"), themeMeta = document.getElementById("themeColor");
  var HERO = { light: "1613977257363-707ba9348227", dark: "1600585154340-be6161a56a0c" };
  function isDark() { return root.getAttribute("data-theme") === "dark"; }
  function heroFor() { return isDark() ? HERO.dark : HERO.light; }
  function tileUrl(kind) { return "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_" + (isDark() ? "Dark" : "Light") + "_Gray_" + kind + "/MapServer/tile/{z}/{y}/{x}"; }
  function syncTheme() {
    var d = isDark();
    thm.setAttribute("aria-label", d ? "Switch to light theme" : "Switch to dark theme");
    themeMeta.setAttribute("content", d ? "#0c0b09" : "#fdfcf9");
    maps.forEach(function (m) { if (m._ileBase) { m._ileBase.setUrl(tileUrl("Base")); m._ileRef.setUrl(tileUrl("Reference")); } });
    var h = document.getElementById("heroImg");
    if (h) { var id = heroFor(); h.src = img(id, 1600); h.srcset = srcset(id, [800, 1200, 1600, 2200]); }
  }
  function applyTheme(dark) {
    if (dark) root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    try { localStorage.setItem("ile:theme", dark ? "dark" : "light"); } catch (e) {}
    syncTheme();
  }
  thm.addEventListener("click", function () {
    var next = !isDark();
    if (rmo || !document.startViewTransition) {
      root.classList.add("theming"); applyTheme(next);
      setTimeout(function () { root.classList.remove("theming"); }, 500);
      return;
    }
    var b = thm.getBoundingClientRect(), cx = b.left + b.width / 2, cy = b.top + b.height / 2,
      rad = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));
    var vt = document.startViewTransition(function () { applyTheme(next); });
    vt.ready.then(function () {
      root.animate({ clipPath: ["circle(0px at " + cx + "px " + cy + "px)", "circle(" + rad + "px at " + cx + "px " + cy + "px)"] },
        { duration: 900, easing: "cubic-bezier(.65,0,.15,1)", pseudoElement: "::view-transition-new(root)" });
    }).catch(function () {});
  });
  syncTheme();

  /* ---------- go ---------- */
  setCount(false);
  render();
})();
