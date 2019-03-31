import { Component, OnInit } from '@angular/core';
import {Shopping} from '../product'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  [x: string]: any;
  
  shopping:Shopping[];
  constructor( private _service:HeroService ) { }
  
  ngOnInit() {
    this._service.getAllshopping().subscribe(
      data=>this.shopping=data
  )
  }
 viewtshoping(a){
   this.selectedshoping.next(a);
 }
}
