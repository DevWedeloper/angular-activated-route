import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from './wild-card.component';

const routes: Routes = [
  {
    path: '',
    component: WildCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WildCardModule {}
