import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServersContainerComponent} from "./servers-container/servers-container.component";
import { TableNavigationComponent } from './table-navigation/table-navigation.component';

const routes: Routes = [
  {
     path: 'servers',
    component: ServersContainerComponent
  },
  {
    path: 'ui',
    component: TableNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
