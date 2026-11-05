/* =========================================================
   CARVE, GEGEVENS VAN DE SITE

   De site is tweetalig (NL en UK). Velden die eindigen op _en
   zijn de Engelse versie. Laat je er een weg, dan toont de
   Engelse site gewoon de Nederlandse tekst.
   Dit is het enige bestand dat je normaal hoeft aan te passen.

   Let op de schrijfwijze: tekst tussen 'aanhalingstekens',
   en na elke regel of elk blokje { } een komma.
   ========================================================= */

const BAND = {
  email: 'music.carve@gmail.com',
  // Vul de links in zodra ze er zijn. Leeg laten ('') = niet tonen.
  instagram: '',
  instagramNaam: '',
  facebook: '',
};

/* ---------------------------------------------------------
   DE BAND
   foto (mag je weglaten): zet een portret in de map "fotos"
   en vul de bestandsnaam in, bijvoorbeeld foto: 'sharon.jpg'
   --------------------------------------------------------- */
const LEDEN = [
  { naam: 'Sharon', rol: 'Zang', rol_en: 'Vocals' },
  { naam: 'Ray', rol: 'Gitaar & Hammond', rol_en: 'Guitar & Hammond' },
  { naam: 'Wouter', rol: 'Gitaar', rol_en: 'Guitar' },
  { naam: 'Frans', rol: 'Bas', rol_en: 'Bass' },
  { naam: 'Hans', rol: 'Drums', rol_en: 'Drums' },
];

/* ---------------------------------------------------------
   EIGEN NUMMERS
   Verschijnen als tracklist op de "achterkant van de hoes".
   --------------------------------------------------------- */
const NUMMERS = [
  'Blood and Wire',
  'Writing Tears',
  'Sunshine',
  'A Soul Full of Blues',
  'Crossing Borders',
];

/* ---------------------------------------------------------
   OPTREDENS
   Eén blokje per optreden. Datum altijd als 'JJJJ-MM-DD'.
   Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld".
   status (mag je weglaten): 'uitverkocht', 'gratis' of 'besloten'
   tickets (mag je weglaten): link naar de kaartverkoop
   akoestisch: true  -> krijgt het label "Akoestisch"
   --------------------------------------------------------- */
const TOUR = [
  // Nieuw optreden? Haal de // weg en pas de regel aan, bijvoorbeeld:
  // { datum: '2027-03-20', tijd: '21:00', zaal: 'Naam zaal', plaats: 'Apeldoorn', tickets: 'https://...' },
  // { datum: '2027-04-12', zaal: 'Café', plaats: 'Deventer', akoestisch: true, status: 'gratis' },
];

/* ---------------------------------------------------------
   VIDEO'S (YouTube)
   Neem het stukje na "v=" uit de YouTube-link.
   Voorbeeld: https://www.youtube.com/watch?v=abc123XYZ  ->  id: 'abc123XYZ'
   --------------------------------------------------------- */
const VIDEOS = [
  // { id: 'abc123XYZ', titel: 'Sunshine, live in ...', titel_en: 'Sunshine, live at ...' },
];

/* ---------------------------------------------------------
   FOTO'S (collage)
   Zet de foto's in de map "fotos" en noem ze hier, in de volgorde
   waarin ze in de collage moeten staan.
   vorm (mag je weglaten): 'groot' (2x2 vakken), 'breed' (2x1),
   'hoog' (1x2) of 'normaal'. Liggende foto's werken het best als
   'breed' of 'groot', staande foto's als 'hoog'.
   onderschrift (mag je weglaten): tekst die bij het vergroten verschijnt.
   --------------------------------------------------------- */
const FOTOS = [
  { bestand: 'podium-groen.jpg', vorm: 'groot' },
  { bestand: 'sharon-blauw.jpg', vorm: 'normaal' },
  { bestand: 'wouter.jpg', vorm: 'hoog' },
  { bestand: 'hans-drums.jpg', vorm: 'normaal' },
  { bestand: 'sharon-vuist.jpg', vorm: 'normaal' },
  { bestand: 'ray-gitaar-toetsen.jpg', vorm: 'normaal' },
  { bestand: 'lichtshow.jpg', vorm: 'breed' },
  { bestand: 'frans-bas.jpg', vorm: 'normaal' },
  { bestand: 'sharon-portret.jpg', vorm: 'hoog' },
  { bestand: 'wouter-sharon.jpg', vorm: 'breed' },
  { bestand: 'podium-rood.jpg', vorm: 'breed' },
  { bestand: 'sharon-gitaar.jpg', vorm: 'normaal' },
  { bestand: 'publiek.jpg', vorm: 'normaal' },
  { bestand: 'gitaar-rood.jpg', vorm: 'hoog' },
  { bestand: 'sharon-oranje.jpg', vorm: 'groot' },
  { bestand: 'drie-gitaren.jpg', vorm: 'normaal' },
  { bestand: 'band-roze.jpg', vorm: 'breed' },
];

/* ---------------------------------------------------------
   RIDERS
   Zet de PDF's in de map "riders" en vul de bestandsnaam in.
   Leeg laten ('') betekent: "op aanvraag".
   --------------------------------------------------------- */
const RIDERS = [
  { titel: 'Technische rider en stageplot', titel_en: 'Technical rider and stage plot',
    omschrijving: 'Inputlijst (19 kanalen), monitors, backline, stroom en podiumopstelling. Versie september 2026.',
    omschrijving_en: 'Input list (19 channels), monitors, backline, power and stage layout. Version September 2026 (Dutch).',
    bestand: 'Carve-technische-rider-2026.pdf' },
  { titel: 'Hospitality rider', titel_en: 'Hospitality rider',
    omschrijving: 'Kleedkamer, catering en parkeren', omschrijving_en: 'Dressing room, catering and parking', bestand: '' },
];
