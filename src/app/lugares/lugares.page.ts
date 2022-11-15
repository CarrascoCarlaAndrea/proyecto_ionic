import { Component, OnInit } from '@angular/core';
import {LugaresService} from './lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})


export class LugaresPage implements OnInit {
  
  lugares:any;
  constructor(private lugarService:LugaresService) { }

  ngOnInit() {
    this.lugares=this.lugarService.getLugares()
  }

}
