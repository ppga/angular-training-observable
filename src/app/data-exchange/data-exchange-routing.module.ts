import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';

const routes: Routes = [
  {
    path: 'acomp',
    component: AcompComponent
  },
  {
    path: 'bcomp',
    component: BcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataExchangeRoutingModule {}