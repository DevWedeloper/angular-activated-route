import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    loadComponent: () =>
      import('./wild-card.component').then((m) => m.WildCardComponent),
  },
];
