import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgoraComponent } from './agora/agora.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { CreapostComponent } from './creapost/creapost.component';
import { OpereComponent } from './opere/opere.component';
import { PensieroComponent } from './pensiero/pensiero.component';
import { VitaPlatoneComponent } from './vita-platone/vita-platone.component';

const routes: Routes = [

  { path: '', component: BenvenutoComponent },
  { path: 'benvenuto', component: BenvenutoComponent },
  { path: 'vitaPlatone', component: VitaPlatoneComponent},
  { path: 'opere', component: OpereComponent},
  { path: 'pensiero', component: PensieroComponent},
  { path: 'agora', component: AgoraComponent},
  { path: 'creapost', component: CreapostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
