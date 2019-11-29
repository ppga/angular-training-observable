import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { of } from  'rxjs'
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.css']
})
export class BasicObservableComponent implements OnInit {

  constructor() { }

tmrsource = timer(1000, 2000);
private subscribe;
private myObservable = of('apple', 'orange', 'grappe');

// const myObserver = {
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };


  ngOnInit() {

    this.myObservable.subscribe({
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log('Observer got a complete notification. Switching to timer');
        this.subscribe = this.tmrsource.subscribe(val => console.log('TICK'+val));
        setTimeout(() => { this.subscribe.unsubscribe(); }, 10000);
     }
    });
  }

}