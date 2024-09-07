import { createRoutes } from '@analogjs/router';
import { Routes } from '@angular/router';

const pages = {
  '/src/app/pages/[...wild-card].page.ts': () =>
    import('./pages/[...wild-card].page'),
};

export const routes: Routes = createRoutes(pages);
