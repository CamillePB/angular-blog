import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from '../app/components/principal/principal.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SecundarioComponent } from './components/secundario/secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ButtonsComponent,
    SecundarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
