import { SITE_IMAGE_FILES } from './site-image-files';

const BASE = '/assets/images';

export const SITE_IMAGES = {
  brandLogo: `${BASE}/${SITE_IMAGE_FILES.brandLogo}`,
  heroFenster: `${BASE}/${SITE_IMAGE_FILES.heroFenster}`,
  dienstFensterStoren: `${BASE}/${SITE_IMAGE_FILES.dienstFensterStoren}`,
  teaserGarten: `${BASE}/${SITE_IMAGE_FILES.teaserGarten}`,
  bandImmobilie: `${BASE}/${SITE_IMAGE_FILES.bandImmobilie}`,
  dienstAussenreinigung: `${BASE}/${SITE_IMAGE_FILES.dienstAussenreinigung}`,
  aboutAussen: `${BASE}/${SITE_IMAGE_FILES.aboutAussen}`,
  dienstHauswartungHandwerk: `${BASE}/${SITE_IMAGE_FILES.dienstHauswartungHandwerk}`,
  kontaktMotiv: `${BASE}/${SITE_IMAGE_FILES.kontaktMotiv}`,
  dienstGartenpflege: `${BASE}/${SITE_IMAGE_FILES.dienstGartenpflege}`,
} as const;
