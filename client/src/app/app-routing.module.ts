import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigation1Component } from './components/navigation1/navigation1.component';
import { Main1Component } from './components/main1/main1.component';

import { Navigation2Component } from './components/navigation2/navigation2.component';
import { Main2Component } from './components/main2/main2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: Navigation1Component,
    children: [
      {
        path: '',
        component: Main1Component
      }
    ]
  },
  {
    path: 'armaTuPedido',
    component: Navigation2Component,
    children: [
      {
        path: '',
        component: Main2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
