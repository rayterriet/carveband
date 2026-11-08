/* Carve, fotoboekjes. De inhoud staat in gegevens.js (FOTOBOEKEN).
   fotoboek.html?boek=<id> toont één fotoboekje,
   fotoboek.html zonder id toont het overzicht van alle fotoboekjes. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst != null) e.textContent = tekst;
    return e;
  }

  var TEKSTEN = {
    nl: {
      terug: 'Terug naar de site', boek: 'Boeken', label: 'Fotoboek', alle: 'Terug naar Carve',
      overzicht: "Fotoboekjes", fotos: "foto's", fotograaf: "Foto's: ",
      vergroot: 'Vergroot foto ', vorige: 'Vorige foto', volgende: 'Volgende foto', sluit: 'Sluiten',
      onbekend: 'Dit fotoboekje bestaat niet (meer). Hieronder staan alle fotoboekjes.',
      voet: 'Soul, blues en een vleugje rock.',
      maanden: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      dagen: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
    },
    en: {
      terug: 'Back to the site', boek: 'Booking', label: 'Photo book', alle: 'Back to Carve',
      overzicht: 'Photo books', fotos: 'photos', fotograaf: 'Photos: ',
      vergroot: 'Enlarge photo ', vorige: 'Previous photo', volgende: 'Next photo', sluit: 'Close',
      onbekend: 'This photo book does not exist (any more). Here are all our photo books.',
      voet: 'Soul, blues and a touch of rock.',
      maanden: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dagen: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  };
  var taal = (function () {
    try { var t = localStorage.getItem('carve-taal'); if (t === 'nl' || t === 'en') return t; } catch (e) {}
    var talen = navigator.languages || [navigator.language || 'nl'];
    return /^nl\b/i.test(talen[0] || '') ? 'nl' : 'en';
  })();
  function T(k) { return TEKSTEN[taal][k] != null ? TEKSTEN[taal][k] : TEKSTEN.nl[k]; }
  function V(obj, veld) { return (taal === 'en' && obj[veld + '_en']) ? obj[veld + '_en'] : obj[veld]; }
  function datumTekst(s) {
    if (!s) return '';
    var p = String(s).split('-').map(Number), d = new Date(p[0], p[1] - 1, p[2]);
    return T('dagen')[d.getDay()] + ' ' + d.getDate() + ' ' + T('maanden')[d.getMonth()] + ' ' + d.getFullYear();
  }

  var boeken = (typeof FOTOBOEKEN !== 'undefined' ? FOTOBOEKEN : [])
    .filter(function (b) { return b && b.id && b.map; })
    .sort(function (a, b) { return String(b.datum || '').localeCompare(String(a.datum || '')); });
  var id = new URLSearchParams(location.search).get('boek');
  var boek = boeken.filter(function (b) { return b.id === id; })[0];

  /* ---------- Lichtbak ---------- */
  var lb = $('lichtbak'), lijst = [], huidige = 0;
  function toon(i) {
    if (!lijst.length) return;
    huidige = (i + lijst.length) % lijst.length;
    var f = lijst[huidige];
    $('lichtbak-img').src = f.src; $('lichtbak-img').alt = f.alt;
    $('lichtbak-tekst').textContent = f.tekst;
    $('lichtbak-tel').textContent = (huidige + 1) + ' / ' + lijst.length;
    if (!lb.open) { if (lb.showModal) lb.showModal(); else lb.setAttribute('open', ''); }
    // volgende alvast laden
    var n = lijst[(huidige + 1) % lijst.length]; if (n) { var p = new Image(); p.src = n.src; }
  }
  $('lb-vorige').addEventListener('click', function () { toon(huidige - 1); });
  $('lb-volgende').addEventListener('click', function () { toon(huidige + 1); });
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.open) return;
    if (e.key === 'ArrowLeft') toon(huidige - 1);
    if (e.key === 'ArrowRight') toon(huidige + 1);
  });
  // vegen op telefoon
  var startX = null;
  lb.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (startX == null) return;
    var dx = e.changedTouches[0].clientX - startX; startX = null;
    if (Math.abs(dx) > 50) toon(huidige + (dx < 0 ? 1 : -1));
  });

  /* ---------- Eén fotoboekje ---------- */
  function toonBoek(b) {
    var titel = V(b, 'titel') || b.plaats || '';
    document.title = titel + ', Carve';
    $('boek-titel').textContent = titel;
    var meta = [datumTekst(b.datum)];
    if (b.zaal) meta.push(V(b, 'zaal'));
    if (b.plaats && titel.indexOf(b.plaats) < 0) meta.push(V(b, 'plaats'));
    var fotos = (b.fotos || []).filter(function (f) { return f && f.bestand; });
    meta.push(fotos.length + ' ' + T('fotos'));
    $('boek-meta').textContent = meta.filter(Boolean).join('  ·  ');
    var intro = V(b, 'tekst');
    $('boek-intro').hidden = !intro; $('boek-intro').textContent = intro || '';
    $('boek-fotograaf').hidden = !b.fotograaf;
    $('boek-fotograaf').textContent = b.fotograaf ? T('fotograaf') + b.fotograaf : '';

    var album = $('album'); lijst = []; knoppen = [];
    var map = 'fotoboek/' + b.map + '/';
    fotos.forEach(function (f, i) {
      var onder = V(f, 'onderschrift') || '';
      lijst.push({ src: map + f.bestand, alt: onder || titel + ', foto ' + (i + 1), tekst: onder });
      var knop = el('button', 'album-foto');
      knop.type = 'button';
      knop.setAttribute('aria-label', T('vergroot') + (i + 1) + (onder ? ': ' + onder : ''));
      var img = el('img');
      img.src = map + 'klein/' + f.bestand;
      img.alt = onder || titel + ', foto ' + (i + 1);
      img.loading = i < 9 ? 'eager' : 'lazy'; img.decoding = 'async';
      if (f.b && f.h) { img.width = f.b; img.height = f.h; }
      img.onerror = function () { if (img.src.indexOf('/klein/') > -1) img.src = map + f.bestand; };
      knop.appendChild(img);
      if (onder) knop.appendChild(el('span', 'album-onder', onder));
      knop.addEventListener('click', function () { toon(i); });
      knoppen.push({ knop: knop, ratio: (f.b && f.h) ? f.h / f.b : 1 });
    });
    $('boeken').hidden = true; album.hidden = false;
    kolomAantal = 0; verdeel();
  }

  /* Foto's op volgorde verdelen, steeds in de kortste kolom */
  var knoppen = [], kolomAantal = 0;
  function verdeel() {
    var album = $('album');
    if (!knoppen.length || album.hidden) return;
    var w = album.clientWidth || window.innerWidth;
    var n = w >= 900 ? 3 : 2;
    if (n === kolomAantal) return;
    kolomAantal = n;
    var kolommen = [], hoogte = [];
    for (var k = 0; k < n; k++) { kolommen.push(el('div', 'album-kolom')); hoogte.push(0); }
    knoppen.forEach(function (x) {
      var kort = hoogte.indexOf(Math.min.apply(null, hoogte));
      kolommen[kort].appendChild(x.knop);
      hoogte[kort] += x.ratio + 0.08;
    });
    album.replaceChildren.apply(album, kolommen);
  }
  window.addEventListener('resize', verdeel);

  /* ---------- Overzicht ---------- */
  function toonOverzicht(melding) {
    document.title = T('overzicht') + ', Carve';
    $('boek-titel').textContent = T('overzicht');
    $('boek-meta').textContent = '';
    $('boek-intro').hidden = !melding; $('boek-intro').textContent = melding ? T('onbekend') : '';
    $('boek-fotograaf').hidden = true;
    $('album').hidden = true;
    var ul = $('boeken'); ul.replaceChildren();
    boeken.forEach(function (b) {
      var li = el('li', 'boekje');
      var a = el('a'); a.href = 'fotoboek.html?boek=' + encodeURIComponent(b.id);
      var omslag = b.omslag || ((b.fotos || [])[0] || {}).bestand;
      if (omslag) {
        var img = el('img'); img.src = 'fotoboek/' + b.map + '/klein/' + omslag; img.alt = ''; img.loading = 'lazy';
        a.appendChild(img);
      }
      var t = el('span', 'boekje-tekst');
      t.appendChild(el('span', 'boekje-titel', V(b, 'titel') || b.plaats));
      t.appendChild(el('span', 'boekje-meta', datumTekst(b.datum) + '  ·  ' + (b.fotos || []).length + ' ' + T('fotos')));
      a.appendChild(t); li.appendChild(a); ul.appendChild(li);
    });
    ul.hidden = false;
  }

  function teken() {
    document.documentElement.lang = taal === 'en' ? 'en-GB' : 'nl';
    document.querySelectorAll('[data-t]').forEach(function (n) { n.textContent = T(n.dataset.t); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === taal)); });
    $('sluit').setAttribute('aria-label', T('sluit'));
    $('lb-vorige').setAttribute('aria-label', T('vorige'));
    $('lb-volgende').setAttribute('aria-label', T('volgende'));
    if (boek) toonBoek(boek); else toonOverzicht(!!id);
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.lang === taal) return;
      taal = b.dataset.lang;
      try { localStorage.setItem('carve-taal', taal); } catch (e) {}
      teken();
    });
  });
  teken();
})();
