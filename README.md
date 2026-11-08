# Carve

Website van Carve: soul, blues en een vleugje rock. In het Nederlands en Engels.

## Inhoud aanpassen

Bijna alles staat in **`gegevens.js`**: de band, de eigen nummers, de optredens, video's, foto's, riders en de contactgegevens.

Op GitHub: open `gegevens.js`, klik op het potloodje, pas iets aan en klik op **Commit changes**.

- **Optreden toevoegen:** zet een regel in `TOUR`, met de datum als `'JJJJ-MM-DD'`. Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld". Met `akoestisch: true` krijgt een optreden het label "Akoestisch". Met `fotoboek: '<id>'` komt er een knop naar het fotoboekje bij.
- **Nummer toevoegen of weghalen:** pas de lijst `NUMMERS` aan. De site verdeelt de nummers zelf over kant A en kant B.
- **Demo bij een nummer:** zet de mp3 in de map `audio` en schrijf het nummer in `NUMMERS` als `{ titel: 'Naam', audio: 'bestand.mp3' }`. Er verschijnt dan een afspeelknop, en de plaat draait mee zolang de demo speelt. Gebruik mp3 (ca. 192 kbps), geen wav: dat laadt veel sneller.
- **Video toevoegen:** neem het id uit de YouTube-link (het stukje na `v=`).
- **Foto's:** zet ze in de map `fotos` en noem ze in `FOTOS`.
- **Fotoboekje toevoegen:** maak een map onder `fotoboek`, bijvoorbeeld `fotoboek/deventer-2027-03-20/`, met de foto's erin en dezelfde foto's kleiner (ca. 700 px) in de submap `klein`. Zet daarna een blokje in `FOTOBOEKEN`. Het fotoboekje verschijnt vanzelf onder de foto's op de hoofdpagina en heeft een eigen pagina: `fotoboek.html?boek=<id>`.
- **Riders:** zet de PDF's in een map `riders` en vul de bestandsnaam in.
- **Instagram en Facebook:** vul de links in bij `BAND`. Zolang ze leeg zijn, worden ze niet getoond.

## Na een wijziging

Bezoekers kunnen een oude versie even in hun browser bewaren. Wil je dat een wijziging meteen bij iedereen zichtbaar is, verhoog dan in `index.html` het versienummer achter `?v=` (bijvoorbeeld van `20261108a` naar `20261108b`, in `index.html` én `fotoboek.html`).

## Bestanden

| Bestand | Wat |
| --- | --- |
| `index.html` | De pagina |
| `gegevens.js` | Alle inhoud, hier pas je dingen aan |
| `site.js` | Opbouw van de pagina en de vaste teksten in NL en EN |
| `style.css` | Vormgeving |
| `img/` | Logo, embleem, speakerdoek en deelbeeld |
| `fotos/` | Livefoto's |
| `audio/` | Demo's (mp3) |
| `fotoboek.html`, `fotoboek.js` | Pagina voor de fotoboekjes |
| `fotoboek/` | Foto's per fotoboekje |
| `robots.txt`, `sitemap.xml` | Voor zoekmachines |

## Online zetten met GitHub Pages

Settings → Pages → Source: *Deploy from a branch*, branch `main`, map `/ (root)`.
Vul onder *Custom domain* `carveband.nl` in en zet *Enforce HTTPS* aan.
