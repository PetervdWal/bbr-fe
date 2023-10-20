import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServersContainerComponent} from './servers-container/servers-container.component';
import {ServersComponent} from "./servers/servers.component";


@NgModule({
  declarations: [
    AppComponent,
    ServersContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
