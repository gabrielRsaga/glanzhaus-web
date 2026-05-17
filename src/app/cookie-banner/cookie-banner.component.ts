import { Component, signal, afterNextRender, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const CONSENT_KEY = 'gh_cookie_consent';

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink, ButtonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!localStorage.getItem(CONSENT_KEY)) {
        this.visible.set(true);
      }
    });
  }

  accept(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    }
    this.visible.set(false);
  }

  configure(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(CONSENT_KEY, 'configured');
    }
    this.visible.set(false);
  }
}
