import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigation1Component } from './components/navigation1/navigation1.component';
import { Main1Component } from './components/main1/main1.component';

import { Navigation2Component } from './components/navigation2/navigation2.component';
import { Main2Component } from './components/main2/main2.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { AboutComponent } from './components/about/about.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

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
        component: Banner2Component,
        children: [
          {
            path: 'index',
            component: Main2Component
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'comentarios',
            component: ComentariosComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
