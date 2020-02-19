import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnavPageRoutingModule } from './tabnav-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { TabnavPage } from './tabnav.page';
const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
      {
        path: 'avisos',
        loadChildren: '../avisos/avisos.module#AvisosPageModule'
      },
      {
        path: 'lista-mensajes',
        loadChildren: '../lista-mensajes/lista-mensajes.module#ListaMensajesPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab-nav/home'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}
