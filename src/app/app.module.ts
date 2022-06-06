import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';
import { TarjetaCotizarComponent } from './Components/tarjeta-cotizar/tarjeta-cotizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CotizarComponent,
    TarjetaCotizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
