import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { TitoloComponent } from './titolo/titolo.component';
import { NavigazioneComponent } from './navigazione/navigazione.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    TitoloComponent,
    NavigazioneComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
