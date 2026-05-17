import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

import { GhInViewDirective } from '../../directives/gh-in-view.directive';
import { SITE_IMAGES } from '../../site-images';

@Component({
  selector: 'app-references',
  imports: [RouterLink, ButtonModule, CardModule, TagModule, GhInViewDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  readonly img = SITE_IMAGES;

  readonly reviews = [
    {
      name: 'R F',
      initials: 'RF',
      text: 'Top Arbeit weiter so! Sehr Freundlich!!',
    },
    {
      name: 'Jean-Luc Petitpierre',
      initials: 'JP',
      text: 'Wir haben unser Glasdach reinigen lassen und sind vom Ergebnis begeistert. Glanzhaus war sehr kompetent und freundlich. Ein unkomplizierter Service, den wir jederzeit wieder in Anspruch nehmen würden. Klare Weiterempfehlung!',
    },
    {
      name: 'Verena Faes',
      initials: 'VF',
      text: 'Bin sehr zufrieden. Zuverlässig und sehr freundlich. Alles speditiv erledigt. Werde ihn gerne weiter empfehlen.',
    },
    {
      name: 'Auto Sursee GmbH',
      initials: 'AS',
      text: 'Wir von Auto Sursee möchten uns herzlich bei Glanzhaus bedanken! Die Fassade und die Scheiben unseres Gebäudes wurden absolut professionell gereinigt, alles glänzt wieder wie neu. Zuverlässig, freundlich und mit viel Liebe zum Detail – so wünscht man sich eine Zusammenarbeit. Klare Weiterempfehlung und gerne wieder.',
    },
    {
      name: 'Margrit Mahler',
      initials: 'MM',
      text: 'Absolut saubere Fenster, professionelle zügige Arbeitsleistung.',
    },
    {
      name: 'Beat Schwob',
      initials: 'BS',
      text: 'Nach Mikes Power Wash Reinigung erstrahlt unser Terrassenboden in neuem Glanz. Professionell, zuverlässig und zu fairem Preis.',
    },
    {
      name: 'Stefano De Valerio',
      initials: 'SD',
      text: 'Ich bin absolut begeistert von Mikes Power Wash! Manuel hat meinen Garten unglaublich gründlich gereinigt und alles sieht jetzt wie neu aus. Von der ersten Kontaktaufnahme bis zur Fertigstellung des Auftrags war der Service erstklassig. Manuel ist sehr professionell, pünktlich und freundlich. Besonders beeindruckt hat mich die Sorgfalt, mit der er gearbeitet hat. Der Preis war fair und angesichts der hervorragenden Leistung mehr als gerechtfertigt.',
    },
    {
      name: 'Sina Leimgruber',
      initials: 'SL',
      text: 'Ich war sehr zufrieden mit der Arbeit und mein Balkon sieht wieder aus wie neu! Sehr freundlich und kundenorientiert.',
    },
  ] as const;

  readonly highlights = [
    {
      title: 'Fenster & Fassaden',
      tags: ['Treppenhaus', 'Gewerbe'],
      text: 'Regelmässige Reinigung für hellen, gepflegten Eindruck bei Bewohnern und Besuchern.',
    },
    {
      title: 'Aussenanlagen',
      tags: ['Terrasse', 'Weg', 'Holz'],
      text: 'Entfernung von Moos und Algen mit materialschonenden Verfahren — wieder griffig und einladend.',
    },
    {
      title: 'Garten & Hauswart',
      tags: ['Laufende Pflege', 'Kleine Reparaturen'],
      text: 'Rasen, Beete und Hecken im Rhythmus Ihrer Saison — ergänzt durch pragmatische Hauswartungsarbeiten.',
    },
  ] as const;
}
