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
   FOTO'S
   Zet de foto's in de map "fotos" en noem ze hier.
   --------------------------------------------------------- */
const FOTOS = [
  { bestand: 'live-1.jpg', onderschrift: 'Altijd die energie', onderschrift_en: 'That energy, every time' },
  { bestand: 'live-2.jpg', onderschrift: 'Gitaren op scherp', onderschrift_en: 'Guitars turned up' },
  { bestand: 'live-3.jpg', onderschrift: 'Sharon geeft alles', onderschrift_en: 'Sharon gives it all' },
  { bestand: 'live-4.jpg', onderschrift: 'Handen in de lucht', onderschrift_en: 'Hands in the air' },
];

/* ---------------------------------------------------------
   RIDERS
   Zet de PDF's in de map "riders" en vul de bestandsnaam in.
   Leeg laten ('') betekent: "op aanvraag".
   --------------------------------------------------------- */
const RIDERS = [
  { titel: 'Technische rider', titel_en: 'Technical rider',
    omschrijving: 'Kanalenlijst, monitoring en backline (eigen XR18-mixer)', omschrijving_en: 'Input list, monitoring and backline (own XR18 mixer)', bestand: '' },
  { titel: 'Stageplot', titel_en: 'Stage plot',
    omschrijving: 'Opstelling van vijf muzikanten met Hammond', omschrijving_en: 'Five-piece layout including Hammond', bestand: '' },
  { titel: 'Hospitality rider', titel_en: 'Hospitality rider',
    omschrijving: 'Kleedkamer, catering en parkeren', omschrijving_en: 'Dressing room, catering and parking', bestand: '' },
];
