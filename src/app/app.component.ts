import { Component } from '@angular/core';
// import { timer } from 'rxjs';
// import { of } from  'rxjs'
import { Observable } from 'rxjs';
'./esc-input/esc-input.component';
import { SeqObserverComponent } from './seq-observer/seq-observer.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { DataExchangeComponent } from './data-exchange/data-exchange.component';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  constructor() {
  // myObservable.subscribe(myObserver);
}



//   stream = Observable.create(observer => {
//   observer.next(1);
//   observer.next(2);
// });

//  stream.subscribe(data => console.log(data));
}
