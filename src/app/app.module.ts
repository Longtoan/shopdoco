import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { TuvanComponent } from './tuvan/tuvan.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ShoppingComponent,
    TuvanComponent,
    PagenotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
