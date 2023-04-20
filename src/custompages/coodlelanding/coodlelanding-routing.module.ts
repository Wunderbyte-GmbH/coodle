import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoodlelandingPage } from './coodlelanding.page';

const routes: Routes = [
  {
    path: '',
    component: CoodlelandingPage,
    children: [
      {
        path: 'dok1',
        redirectTo: '/main/more/siteplugins/content/local_coodle/view_files2/0'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoodlelandingPageRoutingModule {}
