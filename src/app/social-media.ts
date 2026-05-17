export type SocialMediaItem = { label: string; icon: string; href: string | null };

/** Profil-URLs eintragen; solange null, nur Icon (ohne Link). */
export const SOCIAL_MEDIA: SocialMediaItem[] = [
  { label: 'Instagram', icon: 'pi pi-instagram', href: 'https://www.instagram.com/glanzhaus.ch/' },
  { label: 'LinkedIn', icon: 'pi pi-linkedin', href: 'https://www.linkedin.com/company/glanz-haus/' },
  { label: 'Facebook', icon: 'pi pi-facebook', href: 'https://www.facebook.com/profile.php?id=61574993188419' },
];
