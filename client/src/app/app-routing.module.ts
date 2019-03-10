import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Header1Component } from './page1/header1/header1.component';
import { Main1Component } from './page1/main1/main1.component';
import { Header2Component } from './page2/header2/header2.component';
import { Banner2Component } from './page2/banner2/banner2.component';
import { Main2Component } from './page2/main2/main2.component';

const routes: Routes = [
  {
    path: 'home',
    component: Header1Component,
    children: [{
      path: '',
      component: Main1Component
    }]
  },
  {
    path: 'armaTuPedido',
    component: Header2Component,
    children: [{
      path: '',
      component: Banner2Component
    }]

  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
