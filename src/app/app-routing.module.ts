import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { OpereComponent } from './opere/opere.component';
import { PensieroComponent } from './pensiero/pensiero.component';
import { VitaPlatoneComponent } from './vita-platone/vita-platone.component';

const routes: Routes = [

  { path: '', component: BenvenutoComponent },
  { path: 'benvenuto', component: BenvenutoComponent },
  { path: 'vitaPlatone', component: VitaPlatoneComponent},
  { path: 'opere', component: OpereComponent},
  { path: 'pensiero', component: PensieroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
