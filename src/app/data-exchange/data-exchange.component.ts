import { Component, OnInit } from '@angular/core';
import { AcompComponent } from './data-exchange/acomp/acomp.component';
import { BcompComponent } from './data-exchange/bcomp/bcomp.component';

@Component({
  selector: 'app-data-exchange',
  templateUrl: './data-exchange.component.html',
  styleUrls: ['./data-exchange.component.css'],
})
export class DataExchangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}