import { Component, signal, inject, afterNextRender, DestroyRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ToastModule } from 'primeng/toast';
import { SITE_IMAGES } from './site-images';
import { SOCIAL_MEDIA } from './social-media';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, DrawerModule, ToastModule, CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);
  readonly year = new Date().getFullYear();
  readonly brandLogo = SITE_IMAGES.brandLogo;
  readonly socialMedia = SOCIAL_MEDIA;

  constructor() {
    const win = inject(DOCUMENT).defaultView;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!win) return;
      const onScroll = () => this.scrolled.set(win.scrollY > 30);
      win.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => win.removeEventListener('scroll', onScroll));
    });
  }

  readonly navItems = [
    { label: 'Home', path: '/' },
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'Referenzen', path: '/referenzen' },
    { label: 'Mietgeräte', path: '/mietgeraete' },
    { label: 'Kontakt', path: '/kontakt' },
  ] as const;

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
