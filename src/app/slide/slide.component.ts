import { Component, OnInit } from '@angular/core';
import {News} from '../product';
import {HeroService} from '../hero.service'
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
 
  tintuc:News[];
  constructor( private _service:HeroService ) { }
  ngOnInit() {
  this._service.getAllnew().subscribe(
    data=>this.tintuc=data
  )  
  
  }

}
