import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoodlelandingPage } from './coodlelanding.page';

const routes: Routes = [
  {
    path: '',
    component: CoodlelandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoodlelandingPageRoutingModule {}
