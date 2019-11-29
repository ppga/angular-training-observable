import { Component } from '@angular/core';
// import { timer } from 'rxjs';
// import { of } from  'rxjs'
import { Observable } from 'rxjs';


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
