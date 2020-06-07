import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvengersComponent } from './avengers/avengers.component';
import { TronComponent } from './tron/tron.component';


const routes: Routes = [
  {
    path: 'avengers',
    component: AvengersComponent,
  },
  {
    path: 'tron',
    component: TronComponent,
  },
  {
    path: '',
    redirectTo: 'tron',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
