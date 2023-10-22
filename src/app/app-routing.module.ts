import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersContainerComponent } from './servers-container/servers-container.component';
import { MapIconComponent } from './servers/map-icon/map-icon.component';

const routes: Routes = [
  {
    path: 'servers',
    component: ServersContainerComponent,
  },
  {
    path: 'ui',
    component: MapIconComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
