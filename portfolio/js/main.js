/* Portfolio behaviour: mobile menu, 3D hero tilt, project filters, contact form */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile menu ---------- */
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    if (!btn || !nav) return;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); btn.focus(); } });
    window.matchMedia('(min-width: 1041px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* ---------- 3D hero ---------- */
  var hero = document.getElementById('hero');
  var rig = document.getElementById('rig');
  if (hero && rig) {
    var baseX = 58, baseZ = -32;
    var tx = baseX, tz = baseZ, cx = baseX, cz = baseZ, lastMove = -9999, t0 = performance.now();
    var visible = true;

    function aim(clientX, clientY) {
      var r = hero.getBoundingClientRect();
      var nx = ((clientX - r.left) / r.width) * 2 - 1;
      var ny = ((clientY - r.top) / r.height) * 2 - 1;
      tx = baseX - ny * 12;
      tz = baseZ + nx * 22;
      lastMove = performance.now();
    }
    hero.addEventListener('pointermove', function (e) { aim(e.clientX, e.clientY); });
    hero.addEventListener('pointerdown', function (e) { aim(e.clientX, e.clientY); });

    // Phones: tilt the phone to tilt the scene (Android works directly, iPhone asks once on first tap)
    function onOrient(e) {
      if (e.gamma == null || e.beta == null) return;
      tz = baseZ + Math.max(-30, Math.min(30, e.gamma)) * 0.7;
      tx = baseX + Math.max(-25, Math.min(25, e.beta - 45)) * 0.35;
      lastMove = performance.now();
    }
    function listenOrient() { window.addEventListener('deviceorientation', onOrient); }
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
      document.addEventListener('click', function ask() {
        document.removeEventListener('click', ask);
        DeviceOrientationEvent.requestPermission().then(function (s) { if (s === 'granted') listenOrient(); }).catch(function () {});
      }, { once: true });
    } else if ('ondeviceorientation' in window && window.matchMedia('(pointer: coarse)').matches) {
      listenOrient();
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(hero);
    }

    function frame(now) {
      if (visible && !reduce) {
        if (now - lastMove > 2500) { // idle sway
          var s = (now - t0) / 1000;
          tx = baseX + Math.sin(s * 0.6) * 4;
          tz = baseZ + Math.cos(s * 0.5) * 10;
        }
        cx += (tx - cx) * 0.07;
        cz += (tz - cz) * 0.07;
        rig.style.setProperty('--rx', cx.toFixed(2) + 'deg');
        rig.style.setProperty('--rz', cz.toFixed(2) + 'deg');
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    // Scrolling pulls the three layers apart
    if (!reduce) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var p = Math.min(1, window.scrollY / (window.innerHeight * 0.8));
          rig.style.setProperty('--lift', (1 + p * 1.1).toFixed(3));
          ticking = false;
        });
      }, { passive: true });
    }
  }

  /* ---------- Project gallery + filters ---------- */
  var grid = document.getElementById('grid');
  var filters = document.getElementById('filters');
  var countEl = document.getElementById('count');
  if (grid && filters && window.PROJECTS_API) {
    var api = window.PROJECTS_API;
    grid.innerHTML = api.PROJECTS.map(function (p) {
      return '<a class="card' + (p.featured ? ' featured' : '') + '" href="projects/' + p.slug + '.html" data-cat="' + p.cat.join('|') + '">' +
        '<div class="cover">' + api.coverSVG(p) + '</div>' +
        '<div class="card-body"><h3>' + p.title + '</h3><p>' + p.tagline + '</p>' +
        '<div class="card-tags">' + p.cat.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div></div>' +
        '<span class="card-go" aria-hidden="true">&#8594;</span></a>';
    }).join('');

    var cats = ['All'].concat(api.CATEGORIES);
    filters.innerHTML = cats.map(function (c, i) {
      return '<button type="button" class="chip" data-f="' + c + '" aria-pressed="' + (i === 0) + '">' + c + '</button>';
    }).join('');

    function apply(f) {
      var shown = 0;
      grid.querySelectorAll('.card').forEach(function (card) {
        var ok = f === 'All' || card.getAttribute('data-cat').split('|').indexOf(f) > -1;
        card.hidden = !ok;
        if (ok) shown++;
      });
      filters.querySelectorAll('.chip').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-f') === f)); });
      if (countEl) countEl.textContent = 'Showing ' + shown + ' of ' + api.PROJECTS.length + ' projects';
    }
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (b) apply(b.getAttribute('data-f'));
    });
    apply('All');
  }

  /* ---------- Settings from site-config.js ---------- */
  var S = window.SITE || {};
  document.querySelectorAll('[data-site-email]').forEach(function (el) {
    el.textContent = S.email || '';
    if (el.tagName === 'A') el.href = 'mailto:' + (S.email || '');
  });
  var links = document.getElementById('contactLinks');
  if (links) {
    [['GitHub', S.github], ['LinkedIn', S.linkedin]].forEach(function (x) {
      if (!x[1]) return;
      var a = document.createElement('a');
      a.href = x[1]; a.textContent = x[0]; a.target = '_blank'; a.rel = 'noopener';
      links.appendChild(a);
    });
  }

  var fl = document.getElementById('footLinks');
  if (fl) {
    [['GitHub', S.github], ['LinkedIn', S.linkedin]].forEach(function (x) {
      if (!x[1]) return;
      var a = document.createElement('a');
      a.href = x[1]; a.textContent = x[0]; a.target = '_blank'; a.rel = 'noopener';
      fl.appendChild(a);
    });
  }

  /* ---------- Portrait fallback ---------- */
  var img = document.getElementById('portraitImg');
  if (img) img.addEventListener('error', function () { img.style.display = 'none'; var f = document.getElementById('portraitFallback'); if (f) f.hidden = false; });

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = (d.get('message') || '') + '\n\n' + (d.get('name') || '') + '\n' + (d.get('email') || '');
      var subject = 'Portfolio message from ' + (d.get('name') || 'a visitor');
      window.location.href = 'mailto:' + (S.email || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
