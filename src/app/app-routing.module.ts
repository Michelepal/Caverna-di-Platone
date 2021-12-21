import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';

const routes: Routes = [

  { path: '.', component: BenvenutoComponent },
  { path: 'benvenuto', component: BenvenutoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
