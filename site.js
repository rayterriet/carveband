/* Carve, site-logica. Normaal hoef je hier niets aan te veranderen:
   alle inhoud staat in gegevens.js. Vaste teksten van de site (NL en UK)
   staan hieronder in TEKSTEN. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst != null) e.textContent = tekst;
    return e;
  }
  function lijst(naam) {
    var g = {
      LEDEN: typeof LEDEN !== 'undefined' ? LEDEN : [],
      NUMMERS: typeof NUMMERS !== 'undefined' ? NUMMERS : [],
      TOUR: typeof TOUR !== 'undefined' ? TOUR : [],
      VIDEOS: typeof VIDEOS !== 'undefined' ? VIDEOS : [],
      FOTOS: typeof FOTOS !== 'undefined' ? FOTOS : [],
      RIDERS: typeof RIDERS !== 'undefined' ? RIDERS : [],
      FOTOBOEKEN: typeof FOTOBOEKEN !== 'undefined' ? FOTOBOEKEN : []
    };
    return g[naam] || [];
  }

  /* ---------- Teksten ---------- */
  var TEKSTEN = {
    nl: {
      'top': 'Carve, naar boven', 'menu': 'Hoofdmenu',
      'nav.verhaal': 'Verhaal', 'nav.muziek': 'Muziek', 'nav.fotos': "Foto's", 'nav.boek': 'Boeken',
      'hero.boven': 'Liveband met een eigen geluid',
      'hero.rock': 'een vleugje Rock',
      'hero.intro': 'Bijna twintig jaar podiumenergie, nu met een eigen geluid. Vijf muzikanten uit rock, punk, blues, soul en pop vinden elkaar op het snijvlak van soul, blues en een vleugje rock.',
      'hero.boek': 'Boek Carve', 'hero.muziek': 'Nieuw werk',
      'demo.label': 'Demo', 'demo.speel': 'Speel demo', 'demo.pauze': 'Pauzeer demo',
      'volgende': 'Eerstvolgende',
      'verhaal.label': 'Ons verhaal',
      'verhaal.kop': "Nieuw geluid, dezelfde energie",
      'verhaal.p1': "Carve staat al bijna twintig jaar op de podia. Eén ding is in al die jaren nooit veranderd: de energie die er van het podium af spat. Wat wel is veranderd, is het geluid.",
      'verhaal.p2': "Carve speelt nu vooral eigen werk. Meer soul, minder rock, gedragen door de stem van Sharon, de warmte van de toetsen en twee gitaren die elkaar opzoeken. Een paar zorgvuldig gekozen covers mogen blijven, maar het hart van de set zijn onze eigen nummers.",
      'verhaal.p3': "Rustiger is het er niet op geworden: wie Carve live ziet, blijft niet stilzitten.",
      'band.label': 'De band', 'band.kop': 'Vijf muzikanten, één groove', 'band.affiche': 'Live op het podium',
      'muziek.label': 'Onze muziek', 'muziek.kop': 'Nieuw repertoire',
      'muziek.intro': "Hier een aantal demo's van onze nieuwste nummers.",
      'kant': 'Kant',
      'live.kop': 'Optredens',
      'live.leeg': 'Nieuwe data volgen binnenkort. Jullie podium erbij? <a href="#contact">Neem contact op</a>.',
      'live.eerder': 'Eerder gespeeld',
      'uur': ' uur',
      'chip.uitverkocht': 'Uitverkocht', 'chip.gratis': 'Gratis', 'chip.besloten': 'Besloten', 'chip.tickets': 'Tickets', 'chip.akoestisch': 'Akoestisch', 'chip.fotos': "Foto's",
      'video.kop': 'Op beeld',
      'video.leeg': 'De eerste beelden van het nieuwe werk komen hier te staan.',
      'video.speel': 'Speel video af: ',
      'fotos.label': "Foto's", 'fotos.kop': 'Op het podium', 'fotos.vergroot': 'Vergroot: ', 'vorige': 'Vorige foto', 'volgende': 'Volgende foto',
      'boeken.label': 'Fotoboekjes', 'boeken.intro': "Per optreden alle foto's op een rij.", 'boeken.fotos': "foto's", 'boeken.open': 'Bekijk fotoboek',
      'riders.kop': 'Voor organisatoren',
      'riders.intro': 'Voor organisatoren en technici. Staat er iets niet bij of heb je een vraag over de techniek? Mail ons gerust.',
      'riders.download': 'Download PDF', 'riders.aanvraag': 'Op aanvraag',
      'contact.label': 'Boeken', 'contact.kop': 'Boeken & contact',
      'contact.intro': 'Theater, café, festival of feest: we komen graag langs. Stuur een mail met datum, plaats en een idee van de zaal, dan reageren we snel.',
      'contact.mail': 'Mail', 'contact.volg': 'Volg ons',
      'kopieer': 'Kopieer', 'gekopieerd': 'Gekopieerd', 'geselecteerd': 'Geselecteerd',
      'voet': 'Soul, blues en een vleugje rock.',
      'sluit': 'Sluiten',
      'maanden': ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      'dagen': ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
    },
    en: {
      'top': 'Carve, back to top', 'menu': 'Main menu',
      'nav.verhaal': 'Story', 'nav.muziek': 'Music', 'nav.fotos': 'Photos', 'nav.boek': 'Booking',
      'hero.boven': 'A live band with a sound of its own',
      'hero.rock': 'a touch of Rock',
      'hero.intro': 'Almost twenty years of stage energy, now with a sound of our own. Five musicians from rock, punk, blues, soul and pop meet where soul, blues and a touch of rock collide.',
      'hero.boek': 'Book Carve', 'hero.muziek': 'New songs',
      'demo.label': 'Demo', 'demo.speel': 'Play demo', 'demo.pauze': 'Pause demo',
      'volgende': 'Next up',
      'verhaal.label': 'Our story',
      'verhaal.kop': "A new sound, the same energy",
      'verhaal.p1': "Carve has been on stage for almost twenty years. One thing has never changed in all that time: the energy that comes off the stage. What has changed is the sound.",
      'verhaal.p2': "These days Carve mostly plays original songs. More soul, less rock, carried by Sharon's voice, the warmth of the keys and two guitars that play off each other. A few carefully chosen covers stay in the set, but its heart is our own music.",
      'verhaal.p3': "It has not made us any quieter: nobody stands still at a Carve show.",
      'band.label': 'The band', 'band.kop': 'Five musicians, one groove', 'band.affiche': 'Live on stage',
      'muziek.label': 'Our music', 'muziek.kop': 'New repertoire',
      'muziek.intro': 'A few demos of our newest songs.',
      'kant': 'Side',
      'live.kop': 'Shows',
      'live.leeg': 'New dates coming soon. Want us at your venue? <a href="#contact">Get in touch</a>.',
      'live.eerder': 'Previous shows',
      'uur': '',
      'chip.uitverkocht': 'Sold out', 'chip.gratis': 'Free entry', 'chip.besloten': 'Private', 'chip.tickets': 'Tickets', 'chip.akoestisch': 'Acoustic', 'chip.fotos': 'Photos',
      'video.kop': 'On screen',
      'video.leeg': 'The first footage of the new songs will appear here.',
      'video.speel': 'Play video: ',
      'fotos.label': 'Photos', 'fotos.kop': 'On stage', 'fotos.vergroot': 'Enlarge: ', 'vorige': 'Previous photo', 'volgende': 'Next photo',
      'boeken.label': 'Photo books', 'boeken.intro': 'All the photos from each show, in one place.', 'boeken.fotos': 'photos', 'boeken.open': 'View photo book',
      'riders.kop': 'For promoters',
      'riders.intro': 'For promoters and technicians. Missing something, or got a question about the tech? Just drop us a line.',
      'riders.download': 'Download PDF', 'riders.aanvraag': 'On request',
      'contact.label': 'Booking', 'contact.kop': 'Booking & contact',
      'contact.intro': "Theatre, pub, festival or party: we'd love to come and play. Send us an email with the date, the place and a bit about the venue, and we'll get back to you quickly.",
      'contact.mail': 'Email', 'contact.volg': 'Follow us',
      'kopieer': 'Copy', 'gekopieerd': 'Copied', 'geselecteerd': 'Selected',
      'voet': 'Soul, blues and a touch of rock.',
      'sluit': 'Close',
      'maanden': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'dagen': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  };

  function startTaal() {
    try { var t = localStorage.getItem('carve-taal'); if (t === 'nl' || t === 'en') return t; } catch (e) {}
    var talen = navigator.languages || [navigator.language || 'nl'];
    return /^nl\b/i.test(talen[0] || '') ? 'nl' : 'en';
  }
  var taal = startTaal();
  function T(k) { return TEKSTEN[taal][k] != null ? TEKSTEN[taal][k] : TEKSTEN.nl[k]; }
  function V(obj, veld) { return (taal === 'en' && obj[veld + '_en']) ? obj[veld + '_en'] : obj[veld]; }

  /* ---------- Vaste teksten ---------- */
  function vasteTeksten() {
    document.documentElement.lang = taal === 'en' ? 'en-GB' : 'nl';
    document.querySelectorAll('[data-t]').forEach(function (n) { n.textContent = T(n.dataset.t); });
    document.querySelectorAll('[data-th]').forEach(function (n) { n.innerHTML = T(n.dataset.th); });
    document.querySelectorAll('[data-ta]').forEach(function (n) {
      var p = n.dataset.ta.split(':'); n.setAttribute(p[0], T(p[1]));
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === taal));
    });
  }

  /* ---------- De band ---------- */
  function band() {
    $('leden').replaceChildren();
    lijst('LEDEN').forEach(function (l) {
      if (!l || !l.naam) return;
      var li = el('li', 'lid');
      if (l.foto) {
        var img = el('img', 'lid-foto');
        img.src = 'fotos/' + l.foto; img.alt = l.naam; img.loading = 'lazy';
        li.appendChild(img);
      }
      var tekst = el('div', 'lid-tekst');
      tekst.appendChild(el('span', 'lid-naam', l.naam));
      if (l.rol) tekst.appendChild(el('span', 'lid-rol', V(l, 'rol')));
      li.appendChild(tekst);
      $('leden').appendChild(li);
    });
  }

  /* ---------- Nummers ---------- */
  var speler = null, spelerBestand = null;
  function knopStand(knop, rij) {
    var speelt = speler && !speler.paused && knop.dataset.audio === spelerBestand;
    knop.classList.toggle('speelt', !!speelt);
    rij.classList.toggle('speelt', !!speelt);
    knop.setAttribute('aria-pressed', speelt ? 'true' : 'false');
    knop.setAttribute('aria-label', (speelt ? T('demo.pauze') : T('demo.speel')) + ': ' + knop.dataset.titel);
  }
  function alleKnoppen() {
    var iets = false;
    document.querySelectorAll('.track-speel').forEach(function (k) {
      knopStand(k, k.closest('.track'));
      if (k.classList.contains('speelt')) iets = true;
    });
    var plaat = document.querySelector('.plaat');
    if (plaat) plaat.classList.toggle('speelt', iets);
  }
  function voortgang() {
    if (!speler) return;
    var pct = speler.duration ? (speler.currentTime / speler.duration) * 100 : 0;
    document.querySelectorAll('.track-balk').forEach(function (b) {
      b.style.width = (b.dataset.audio === spelerBestand ? pct : 0) + '%';
    });
  }
  function speel(bestand) {
    if (!speler) {
      speler = new Audio();
      speler.preload = 'none';
      ['play', 'pause', 'ended'].forEach(function (e) { speler.addEventListener(e, alleKnoppen); });
      speler.addEventListener('timeupdate', voortgang);
      speler.addEventListener('ended', function () { speler.currentTime = 0; voortgang(); });
    }
    if (spelerBestand !== bestand) {
      spelerBestand = bestand;
      speler.src = 'audio/' + bestand;
      voortgang();
    }
    if (speler.paused) speler.play().catch(function () {}); else speler.pause();
  }
  function nummers() {
    $('tracks').replaceChildren();
    var n = lijst('NUMMERS').filter(Boolean).map(function (x) {
      return typeof x === 'string' ? { titel: x } : x;
    });
    var helft = Math.ceil(n.length / 2);
    n.forEach(function (nr_, i) {
      var li = el('li', 'track');
      var kant = i < helft ? 'A' : 'B';
      var nr = i < helft ? i + 1 : i - helft + 1;
      li.appendChild(el('span', 'track-nr', kant + nr));
      li.appendChild(el('span', 'track-titel', V(nr_, 'titel')));
      if (nr_.audio) {
        li.classList.add('met-audio');
        li.appendChild(el('span', 'track-demo', T('demo.label')));
        var knop = el('button', 'track-speel');
        knop.type = 'button';
        knop.dataset.audio = nr_.audio;
        knop.dataset.titel = V(nr_, 'titel');
        knop.addEventListener('click', function () { speel(nr_.audio); });
        li.appendChild(knop);
        var balk = el('span', 'track-balk');
        balk.dataset.audio = nr_.audio;
        li.appendChild(balk);
      }
      $('tracks').appendChild(li);
    });
    alleKnoppen();
    voortgang();
  }

  /* ---------- Optredens ---------- */
  function datum(s) { var p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  var vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
  var gigs = lijst('TOUR').filter(function (g) { return g && g.datum; })
    .map(function (g) { return Object.assign({ d: datum(g.datum) }, g); })
    .sort(function (a, b) { return a.d - b.d; });
  var komend = gigs.filter(function (g) { return g.d >= vandaag; });
  var oud = gigs.filter(function (g) { return g.d < vandaag; }).reverse();

  function gigRij(g, metActie) {
    var M = T('maanden'), D = T('dagen');
    var li = el('li', 'gig');
    var t = el('time', 'gig-datum');
    t.setAttribute('datetime', g.datum);
    t.appendChild(el('span', 'gig-dag', String(g.d.getDate())));
    t.appendChild(el('span', 'gig-maand', M[g.d.getMonth()]));
    li.appendChild(t);
    var wat = el('div', 'gig-wat');
    wat.appendChild(el('div', 'gig-zaal', V(g, 'zaal') || ''));
    var meta = D[g.d.getDay()] + ' ' + g.d.getDate() + ' ' + M[g.d.getMonth()] + ' ' + g.d.getFullYear();
    if (g.plaats) meta += ', ' + V(g, 'plaats');
    if (g.tijd) meta += ', ' + g.tijd + T('uur');
    wat.appendChild(el('div', 'gig-meta', meta));
    li.appendChild(wat);
    var actie = el('div', 'gig-actie');
    if (g.akoestisch) actie.appendChild(el('span', 'chip chip-zacht', T('chip.akoestisch')));
    if (metActie) {
      if (g.status === 'uitverkocht') actie.appendChild(el('span', 'chip chip-rood', T('chip.uitverkocht')));
      else if (g.tickets) {
        var a = el('a', 'chip', T('chip.tickets'));
        a.href = g.tickets; a.target = '_blank'; a.rel = 'noopener';
        actie.appendChild(a);
      } else if (g.status === 'gratis') actie.appendChild(el('span', 'chip chip-zacht', T('chip.gratis')));
      else if (g.status === 'besloten') actie.appendChild(el('span', 'chip chip-zacht', T('chip.besloten')));
    }
    if (g.fotoboek) {
      var fb = el('a', 'chip', T('chip.fotos'));
      fb.href = 'fotoboek.html?boek=' + encodeURIComponent(g.fotoboek);
      actie.appendChild(fb);
    }
    if (actie.childNodes.length) li.appendChild(actie);
    return li;
  }
  function tour() {
    $('gigs').replaceChildren(); $('gigs-oud').replaceChildren();
    komend.forEach(function (g) { $('gigs').appendChild(gigRij(g, true)); });
    $('gigs-leeg').hidden = komend.length > 0;
    if (oud.length) {
      oud.forEach(function (g) { $('gigs-oud').appendChild(gigRij(g, false)); });
      $('eerder').hidden = false;
    }
    if (komend.length) {
      var v = komend[0];
      $('volgende').textContent = T('volgende') + ': ' + v.d.getDate() + ' ' + T('maanden')[v.d.getMonth()] + ', ' + V(v, 'zaal') + (v.plaats ? ', ' + V(v, 'plaats') : '');
      $('volgende').hidden = false;
    }
  }

  /* ---------- Video ---------- */
  function video() {
    $('videos').replaceChildren();
    lijst('VIDEOS').forEach(function (v) {
      if (!v || !v.id) return;
      var titel = V(v, 'titel') || '';
      var fig = el('figure', 'video');
      var knop = el('button', 'video-speler');
      knop.type = 'button';
      knop.setAttribute('aria-label', T('video.speel') + titel);
      var img = el('img');
      img.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg';
      img.alt = ''; img.loading = 'lazy';
      knop.appendChild(img);
      knop.appendChild(el('span', 'speel', '▶'));
      knop.addEventListener('click', function () {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1&rel=0';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        f.title = titel || 'Video';
        knop.replaceChildren(f);
      }, { once: true });
      fig.appendChild(knop);
      if (titel) fig.appendChild(el('figcaption', null, titel));
      $('videos').appendChild(fig);
    });
    $('videos-leeg').hidden = $('videos').children.length > 0;
  }

  /* ---------- Foto's ---------- */
  var lb = $('lichtbak');
  var lijstFotos = [], huidige = 0;
  function toonNr(i) {
    if (!lijstFotos.length) return;
    huidige = (i + lijstFotos.length) % lijstFotos.length;
    var f = lijstFotos[huidige];
    $('lichtbak-img').src = f.src; $('lichtbak-img').alt = f.alt;
    $('lichtbak-tekst').textContent = f.tekst;
    $('lichtbak-tel').textContent = (huidige + 1) + ' / ' + lijstFotos.length;
    if (!lb.open) { if (lb.showModal) lb.showModal(); else lb.setAttribute('open', ''); }
  }
  function fotos() {
    var grid = $('foto-grid');
    grid.replaceChildren(); lijstFotos = [];
    var items = lijst('FOTOS').filter(function (f) { return f && f.bestand; });
    var rijen = [[], []];
    items.forEach(function (f, i) {
      var onder = V(f, 'onderschrift') || '';
      lijstFotos.push({ src: 'fotos/' + f.bestand, alt: onder || 'Carve live', tekst: onder, hoog: f.vorm === 'hoog' });
      rijen[i % 2].push(i);
    });
    rijen.forEach(function (rij, r) {
      if (!rij.length) return;
      var strook = el('div', 'strook' + (r ? ' strook-terug' : ''));
      var baan = el('div', 'baan');
      // twee keer achter elkaar, zodat de strook naadloos doorloopt
      [0, 1].forEach(function (kopie) {
        rij.forEach(function (nr) {
          var f = lijstFotos[nr];
          var b = el('button', 'beeldje' + (f.hoog ? ' beeldje-hoog' : ''));
          b.type = 'button';
          if (kopie) { b.tabIndex = -1; b.setAttribute('aria-hidden', 'true'); }
          b.setAttribute('aria-label', T('fotos.vergroot') + (f.tekst || 'Carve live ' + (nr + 1)));
          var img = el('img');
          img.src = f.src; img.alt = kopie ? '' : f.alt; img.loading = 'lazy'; img.decoding = 'async';
          b.appendChild(img);
          b.addEventListener('click', function () { toonNr(nr); });
          baan.appendChild(b);
        });
      });
      baan.style.animationDuration = (rij.length * 5) + 's';
      strook.appendChild(baan);
      grid.appendChild(strook);
    });
  }
  $('lb-vorige').addEventListener('click', function () { toonNr(huidige - 1); });
  $('lb-volgende').addEventListener('click', function () { toonNr(huidige + 1); });
  document.addEventListener('keydown', function (e) {
    if (!lb.open) return;
    if (e.key === 'ArrowLeft') toonNr(huidige - 1);
    if (e.key === 'ArrowRight') toonNr(huidige + 1);
  });
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });

  /* ---------- Fotoboekjes ---------- */
  function fotoboeken() {
    var ul = $('boeken-lijst'); ul.replaceChildren();
    var M = T('maanden');
    var b = lijst('FOTOBOEKEN').filter(function (x) { return x && x.id && x.map; })
      .sort(function (a, c) { return String(c.datum || '').localeCompare(String(a.datum || '')); });
    b.forEach(function (x) {
      var li = el('li', 'boekje');
      var a = el('a'); a.href = 'fotoboek.html?boek=' + encodeURIComponent(x.id);
      a.setAttribute('aria-label', T('boeken.open') + ': ' + (V(x, 'titel') || x.plaats));
      var omslag = x.omslag || ((x.fotos || [])[0] || {}).bestand;
      if (omslag) {
        var img = el('img'); img.src = 'fotoboek/' + x.map + '/klein/' + omslag; img.alt = ''; img.loading = 'lazy';
        a.appendChild(img);
      }
      var t = el('span', 'boekje-tekst');
      t.appendChild(el('span', 'boekje-titel', V(x, 'titel') || x.plaats));
      var meta = '';
      if (x.datum) { var d = datum(x.datum); meta = d.getDate() + ' ' + M[d.getMonth()] + ' ' + d.getFullYear() + '  ·  '; }
      t.appendChild(el('span', 'boekje-meta', meta + (x.fotos || []).length + ' ' + T('boeken.fotos')));
      a.appendChild(t); li.appendChild(a); ul.appendChild(li);
    });
    $('fotoboekjes').hidden = b.length === 0;
  }

  /* ---------- Riders ---------- */
  function riders() {
    $('riders-lijst').replaceChildren();
    lijst('RIDERS').forEach(function (r) {
      var li = el('li', 'rider');
      var t = el('div');
      t.appendChild(el('div', 'rider-titel', V(r, 'titel')));
      if (r.omschrijving) t.appendChild(el('div', 'rider-tekst', V(r, 'omschrijving')));
      li.appendChild(t);
      var bestand = V(r, 'bestand');
      if (bestand) {
        var a = el('a', 'chip', T('riders.download'));
        a.href = 'riders/' + bestand; a.target = '_blank'; a.rel = 'noopener';
        li.appendChild(a);
      } else {
        li.appendChild(el('span', 'chip chip-zacht', T('riders.aanvraag')));
      }
      $('riders-lijst').appendChild(li);
    });
  }

  /* ---------- Contact ---------- */
  var B = typeof BAND !== 'undefined' ? BAND : {};
  $('mail').textContent = B.email || '';
  $('mail').href = 'mailto:' + (B.email || '');
  var soc = [];
  if (B.instagram) soc.push(['Instagram', B.instagram, B.instagramNaam || '']);
  if (B.facebook) soc.push(['Facebook', B.facebook, 'Carve']);
  soc.forEach(function (s) {
    var li = el('li'); var a = el('a', null, s[0] + ' ');
    a.href = s[1]; a.target = '_blank'; a.rel = 'noopener';
    a.appendChild(el('span', null, s[2])); li.appendChild(a); $('sociaal').appendChild(li);
  });
  $('sociaal-blok').hidden = soc.length === 0;
  $('kopieer').addEventListener('click', function () {
    var knop = this;
    function klaar(k) { knop.textContent = T(k); setTimeout(function () { knop.textContent = T('kopieer'); }, 1800); }
    function selecteer() {
      var r = document.createRange(); r.selectNodeContents($('mail'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      klaar('geselecteerd');
    }
    try { navigator.clipboard.writeText(B.email).then(function () { klaar('gekopieerd'); }, selecteer); }
    catch (e) { selecteer(); }
  });

  /* ---------- Alles tekenen, en opnieuw bij taalwissel ---------- */
  function teken() { vasteTeksten(); band(); nummers(); tour(); video(); fotos(); fotoboeken(); riders(); }
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
