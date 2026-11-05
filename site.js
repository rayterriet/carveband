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
      RIDERS: typeof RIDERS !== 'undefined' ? RIDERS : []
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
      'volgende': 'Eerstvolgende',
      'verhaal.label': 'Ons verhaal',
      'verhaal.kop': 'Altijd die energie op het podium',
      'verhaal.p1': 'Carve bestaat bijna twintig jaar en maakte in die tijd heel wat gedaantewisselingen door. Begonnen als rockband, later opgeschoven richting soul en funk. Waar we ook speelden, we hoorden steeds hetzelfde: de energie op het podium is de kracht van de band. Als coverband eindigden we ooit als tweede in de finale van The Battle of the Coverbands in de Melkweg in Amsterdam.',
      'verhaal.p2': 'Vijf jaar geleden begon een nieuw hoofdstuk met zangeres Sharon. Begin 2026 kozen we bewust voor een nieuwe richting: een repertoire met vooral eigen nummers, afgewisseld met een paar zorgvuldig gekozen covers.',
      'verhaal.p3': 'In intiemere settings spelen we de oude rocknummers akoestisch.',
      'band.label': 'De band', 'band.kop': 'Vijf muzikanten, één groove', 'band.affiche': 'Live op het podium',
      'muziek.label': 'Eigen werk', 'muziek.kop': 'Nieuw repertoire',
      'muziek.intro': 'Onze eigen nummers, binnenkort live te horen. Hier een eerste blik op de tracklist.',
      'kant': 'Kant',
      'live.kop': 'Optredens',
      'live.leeg': 'Nieuwe data volgen binnenkort. Jullie podium erbij? <a href="#contact">Neem contact op</a>.',
      'live.eerder': 'Eerder gespeeld',
      'uur': ' uur',
      'chip.uitverkocht': 'Uitverkocht', 'chip.gratis': 'Gratis', 'chip.besloten': 'Besloten', 'chip.tickets': 'Tickets', 'chip.akoestisch': 'Akoestisch',
      'video.kop': 'Op beeld',
      'video.leeg': 'De eerste beelden van het nieuwe werk komen hier te staan.',
      'video.speel': 'Speel video af: ',
      'fotos.label': "Foto's", 'fotos.kop': 'Op het podium', 'fotos.vergroot': 'Vergroot: ',
      'riders.kop': 'Voor organisatoren',
      'riders.intro': 'Voor organisatoren en technici. Staat er iets niet bij of heb je een vraag over de techniek? Mail ons gerust.',
      'riders.download': 'Download PDF', 'riders.aanvraag': 'Op aanvraag',
      'contact.label': 'Boeken', 'contact.kop': 'Boeken & contact',
      'contact.intro': 'Theater, café, festival of feest: we komen graag langs, met de volledige band of akoestisch. Stuur een mail met datum, plaats en een idee van de zaal, dan reageren we snel.',
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
      'volgende': 'Next up',
      'verhaal.label': 'Our story',
      'verhaal.kop': 'It has always been about the energy on stage',
      'verhaal.p1': 'Carve has been around for almost twenty years and has changed shape more than once. We started out as a rock band and later moved towards soul and funk. Wherever we played, people told us the same thing: the energy on stage is what makes this band. As a cover band we once finished second in the final of The Battle of the Coverbands at the Melkweg in Amsterdam.',
      'verhaal.p2': 'Five years ago a new chapter began with singer Sharon. In early 2026 we deliberately chose a new direction: a set of mostly original songs, mixed with a few carefully chosen covers.',
      'verhaal.p3': 'In more intimate settings we play the old rock songs acoustically.',
      'band.label': 'The band', 'band.kop': 'Five musicians, one groove', 'band.affiche': 'Live on stage',
      'muziek.label': 'Original songs', 'muziek.kop': 'New repertoire',
      'muziek.intro': 'Our own songs, coming soon to a stage near you. A first look at the track list.',
      'kant': 'Side',
      'live.kop': 'Shows',
      'live.leeg': 'New dates coming soon. Want us at your venue? <a href="#contact">Get in touch</a>.',
      'live.eerder': 'Previous shows',
      'uur': '',
      'chip.uitverkocht': 'Sold out', 'chip.gratis': 'Free entry', 'chip.besloten': 'Private', 'chip.tickets': 'Tickets', 'chip.akoestisch': 'Acoustic',
      'video.kop': 'On screen',
      'video.leeg': 'The first footage of the new songs will appear here.',
      'video.speel': 'Play video: ',
      'fotos.label': 'Photos', 'fotos.kop': 'On stage', 'fotos.vergroot': 'Enlarge: ',
      'riders.kop': 'For promoters',
      'riders.intro': 'For promoters and technicians. Missing something, or got a question about the tech? Just drop us a line.',
      'riders.download': 'Download PDF', 'riders.aanvraag': 'On request',
      'contact.label': 'Booking', 'contact.kop': 'Booking & contact',
      'contact.intro': "Theatre, pub, festival or party: we'd love to come and play, with the full band or acoustic. Send us an email with the date, the place and a bit about the venue, and we'll get back to you quickly.",
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
        img.src = 'fotos/' + l.foto; img.alt = ''; img.loading = 'lazy';
        li.appendChild(img);
      }
      li.appendChild(el('span', 'lid-naam', l.naam));
      if (l.rol) li.appendChild(el('span', 'lid-rol', V(l, 'rol')));
      $('leden').appendChild(li);
    });
  }

  /* ---------- Nummers ---------- */
  function nummers() {
    $('tracks').replaceChildren();
    var n = lijst('NUMMERS').filter(Boolean);
    var helft = Math.ceil(n.length / 2);
    n.forEach(function (titel, i) {
      var li = el('li', 'track');
      var kant = i < helft ? 'A' : 'B';
      var nr = i < helft ? i + 1 : i - helft + 1;
      li.appendChild(el('span', 'track-nr', kant + nr));
      li.appendChild(el('span', 'track-titel', titel));
      $('tracks').appendChild(li);
    });
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
  function toon(src, alt, tekst) {
    $('lichtbak-img').src = src; $('lichtbak-img').alt = alt || '';
    $('lichtbak-tekst').textContent = tekst || '';
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function fotos() {
    $('foto-grid').replaceChildren();
    lijst('FOTOS').forEach(function (f) {
      if (!f || !f.bestand) return;
      var onder = V(f, 'onderschrift') || '';
      var fig = el('figure', 'foto');
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', T('fotos.vergroot') + (onder || 'Carve live'));
      var img = el('img');
      img.src = 'fotos/' + f.bestand; img.alt = onder || 'Carve live'; img.loading = 'lazy';
      b.appendChild(img);
      b.addEventListener('click', function () { toon(img.src, img.alt, onder); });
      fig.appendChild(b);
      if (onder) fig.appendChild(el('figcaption', null, onder));
      $('foto-grid').appendChild(fig);
    });
  }
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });

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
  function teken() { vasteTeksten(); band(); nummers(); tour(); video(); fotos(); riders(); }
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
