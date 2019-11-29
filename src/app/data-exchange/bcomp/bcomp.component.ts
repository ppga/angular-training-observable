import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

 data: any;

  constructor(private router: Router, private sharedData: SharedService, private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.url.subscribe(url=>console.log('The URL changed to: ' + url));
    this.sharedData.currentData.subscribe(data => this.data = data);
    
  }

  changeData() {
    this.sharedData.changeData({name: 'Romario Varia'});
    this.router.navigate(['acomp']);
  }


}