import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { TitoloComponent } from './titolo/titolo.component';
import { NavigazioneComponent } from './navigazione/navigazione.component';
import { PiedipaginaComponent } from './piedipagina/piedipagina.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { VitaPlatoneComponent } from './vita-platone/vita-platone.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    TitoloComponent,
    NavigazioneComponent,
    PiedipaginaComponent,
    BenvenutoComponent,
    VitaPlatoneComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
