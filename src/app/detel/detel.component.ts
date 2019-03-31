import { Component, OnInit } from '@angular/core';
import {Shopping} from '../product'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-detel',
  templateUrl: './detel.component.html',
  styleUrls: ['./detel.component.css']
})
export class DetelComponent implements OnInit {

  shopping:Shopping[];
  constructor( private _service:HeroService ) { }
  
  ngOnInit() {
    this._service.getAllshopping().subscribe(
      data=>this.shopping=data
      
  )
  }

}
