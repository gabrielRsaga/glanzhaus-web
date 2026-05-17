import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { GhInViewDirective } from '../../directives/gh-in-view.directive';
import { SITE_IMAGES } from '../../site-images';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule, CardModule, GhInViewDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly img = SITE_IMAGES;

  readonly services = [
    {
      icon: 'pi pi-window-maximize',
      title: 'Fenster- und Storenreinigung',
      text: 'Streifenfreier Durchblick durch professionelle Reinigung inklusive Rahmenpflege — schnell, gründlich und werterhaltend für Zuhause oder Ihr Unternehmen.',
      image: SITE_IMAGES.dienstFensterStoren,
    },
    {
      icon: 'pi pi-sun',
      title: 'Aussenreinigung',
      text: 'Bodenbeläge, Terrassen und Wege werden schonend von Moos, Algen und hartnäckigen Verschmutzungen befreit — für Sauberkeit und langanhaltenden Werterhalt.',
      image: SITE_IMAGES.dienstAussenreinigung,
    },
    {
      icon: 'pi pi-wrench',
      title: 'Hauswartung | Handwerk',
      text: 'Reibungsloser Betrieb Ihrer Immobilie und unkomplizierte Erledigung anfallender Arbeiten — auch bei kleineren Reparaturen, z. B. am Gartenzaun.',
      image: SITE_IMAGES.dienstHauswartungHandwerk,
    },
    {
      icon: 'pi pi-sparkles',
      title: 'Gartenpflege',
      text: 'Regelmässige Pflege von Rasen und Beeten bis zum fachgerechten Rückschnitt von Sträuchern — inklusive ordentlicher Entsorgung des Grünguts.',
      image: SITE_IMAGES.dienstGartenpflege,
    },
  ] as const;

  readonly partners = [
    {
      name: 'Autozentrum Sursee',
      logo: 'https://glanzhaus.ch/files/userdata/thumbs/compressed/1180749.PNG',
      url: 'https://www.auto-sursee.ch/',
    },
    {
      name: 'MPrint — Druck, der wirkt.',
      logo: 'https://glanzhaus.ch/files/userdata/thumbs/compressed/1141746.png',
      url: 'https://mprint1.webnode.page/',
    },
    {
      name: 'top-offerten.ch — TOP-PARTNER',
      logo: 'https://glanzhaus.ch/files/userdata/thumbs/compressed/1115695.jpg',
      url: 'https://top-offerten.ch/reinigungsfirma',
    },
  ] as const;

  readonly pillars = [
    { icon: 'pi pi-user', title: 'Persönlicher Service', text: 'Individuelle Betreuung auf Augenhöhe — Sie sind kein Profil in einer Liste, sondern ein geschätzter Partner.' },
    { icon: 'pi pi-wallet', title: 'Faire Preise', text: 'Transparente Konditionen mit klaren Festpreisen — ehrliche Angebote ohne versteckte Kosten.' },
    { icon: 'pi pi-check-circle', title: 'Zuverlässigkeit', text: 'Pünktlichkeit, Termintreue und saubere Ausführung sind der Kern der täglichen Arbeit.' },
    { icon: 'pi pi-bolt', title: 'Moderne Technik & Erfahrung', text: 'Bewährtes Handwerk kombiniert mit moderner Reinigungstechnologie — effizient und materialschonend.' },
  ] as const;
}
