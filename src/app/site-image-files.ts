/**
 * Dateinamen in src/assets/images/ (mit Extension, z. B. .png).
 * Anpassen: hier nur den String ändern, wenn Sie Dateien umbenennen.
 * Dieselbe Datei kann für mehrere Slots genutzt werden (z. B. Hero + passende Dienstleistungs-Karte).
 */
const FILES = {
  /** Logo für Header, Footer & Kontakt */
  brandLogo: 'logo_icon.png',
  /** Hero: Glas / Fenster-Motiv */
  heroGlas: 'glass.png',
  fensterStoren: 'fenster-storenreinigung.png',
  teamManuel: 'team-manuel-mikes.png',
  aussenTerrasse: 'aussenreinigung-terrasse.png',
  handwerk: 'hauswartung-handwerk.png',
  garten: 'gartenpflege.png',
} as const;

export const SITE_IMAGE_FILES = {
  brandLogo: FILES.brandLogo,
  heroFenster: FILES.heroGlas,
  /** Unsere Dienstleistungen — Karte «Fenster- und Storenreinigung» */
  dienstFensterStoren: FILES.fensterStoren,
  teaserGarten: FILES.teamManuel,
  bandImmobilie: FILES.aussenTerrasse,
  /** Unsere Dienstleistungen — Karte «Aussenreinigung» */
  dienstAussenreinigung: FILES.aussenTerrasse,
  aboutAussen: FILES.handwerk,
  /** Unsere Dienstleistungen — Karte «Hauswartung | Handwerk» */
  dienstHauswartungHandwerk: FILES.handwerk,
  kontaktMotiv: FILES.garten,
  /** Unsere Dienstleistungen — Karte «Gartenpflege» */
  dienstGartenpflege: FILES.garten,
} as const;

export type SiteImageSlot = keyof typeof SITE_IMAGE_FILES;
