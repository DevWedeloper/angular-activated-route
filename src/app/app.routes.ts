import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./wild-card/wild-card.module').then((m) => m.WildCardModule),
  },
];
