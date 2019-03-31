import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {TuvanComponent} from './tuvan/tuvan.component';
import { DetelComponent } from './detel/detel.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: 'tuvan', component: TuvanComponent},
  { path: 'detel/:Id', component: DetelComponent},
  { path: 'shopping', component: ShoppingComponent, data: { title: 'Shopping list' }},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [
    DetelComponent
  ]
})
export class AppRoutingModule { }
