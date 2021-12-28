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
import { Vita1Component } from './vita1/vita1.component';
import { Vita2Component } from './vita2/vita2.component';
import { Vita3Component } from './vita3/vita3.component';
import { Vita4Component } from './vita4/vita4.component';
import { Vita5Component } from './vita5/vita5.component';
import { Vita6Component } from './vita6/vita6.component';
import { Vita7Component } from './vita7/vita7.component';
import { OpereComponent } from './opere/opere.component';
import { PensieroComponent } from './pensiero/pensiero.component';
import { AgoraComponent } from './agora/agora.component';


@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    TitoloComponent,
    NavigazioneComponent,
    PiedipaginaComponent,
    BenvenutoComponent,
    VitaPlatoneComponent,
    Vita1Component,
    Vita2Component,
    Vita3Component,
    Vita4Component,
    Vita5Component,
    Vita6Component,
    Vita7Component,
    OpereComponent,
    PensieroComponent,
    AgoraComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
