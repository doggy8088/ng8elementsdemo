import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadTxComponent } from './load-tx/load-tx.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: LoadTxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
