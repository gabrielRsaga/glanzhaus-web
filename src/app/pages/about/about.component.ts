import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { GhInViewDirective } from '../../directives/gh-in-view.directive';
import { SITE_IMAGES } from '../../site-images';

@Component({
  selector: 'app-about',
  imports: [RouterLink, ButtonModule, GhInViewDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly img = SITE_IMAGES;
}
