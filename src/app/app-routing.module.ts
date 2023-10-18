import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServersContainerComponent} from "./servers-container/servers-container.component";

const routes: Routes = [
  {
     path: 'servers',
    component: ServersContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
