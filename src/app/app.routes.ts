import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'ueber-uns',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'referenzen',
    loadComponent: () =>
      import('./pages/references/references.component').then((m) => m.ReferencesComponent),
  },
  {
    path: 'mietgeraete',
    loadComponent: () =>
      import('./pages/mietgeraete/mietgeraete.component').then((m) => m.MietgeraeteComponent),
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'impressum',
    loadComponent: () => import('./pages/impressum/impressum.component').then((m) => m.ImpressumComponent),
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
  { path: '**', redirectTo: '' },
];
