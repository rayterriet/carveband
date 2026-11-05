# Carve

Website van Carve: soul, blues en een vleugje rock. In het Nederlands en Engels.

## Inhoud aanpassen

Bijna alles staat in **`gegevens.js`**: de band, de eigen nummers, de optredens, video's, foto's, riders en de contactgegevens.

Op GitHub: open `gegevens.js`, klik op het potloodje, pas iets aan en klik op **Commit changes**.

- **Optreden toevoegen:** zet een regel in `TOUR`, met de datum als `'JJJJ-MM-DD'`. Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld". Met `akoestisch: true` krijgt een optreden het label "Akoestisch".
- **Nummer toevoegen of weghalen:** pas de lijst `NUMMERS` aan. De site verdeelt de nummers zelf over kant A en kant B.
- **Video toevoegen:** neem het id uit de YouTube-link (het stukje na `v=`).
- **Foto's:** zet ze in de map `fotos` en noem ze in `FOTOS`.
- **Riders:** zet de PDF's in een map `riders` en vul de bestandsnaam in.
- **Instagram en Facebook:** vul de links in bij `BAND`. Zolang ze leeg zijn, worden ze niet getoond.

## Na een wijziging

Bezoekers kunnen een oude versie even in hun browser bewaren. Wil je dat een wijziging meteen bij iedereen zichtbaar is, verhoog dan in `index.html` het versienummer achter `?v=` (bijvoorbeeld van `20261105a` naar `20261105b`).

## Bestanden

| Bestand | Wat |
| --- | --- |
| `index.html` | De pagina |
| `gegevens.js` | Alle inhoud, hier pas je dingen aan |
| `site.js` | Opbouw van de pagina en de vaste teksten in NL en EN |
| `style.css` | Vormgeving |
| `img/` | Logo, embleem, speakerdoek en deelbeeld |
| `fotos/` | Livefoto's |
| `robots.txt`, `sitemap.xml` | Voor zoekmachines |

## Online zetten met GitHub Pages

Settings → Pages → Source: *Deploy from a branch*, branch `main`, map `/ (root)`.
Vul onder *Custom domain* `carveband.nl` in en zet *Enforce HTTPS* aan.
