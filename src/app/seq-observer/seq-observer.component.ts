import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';






@Component({
  selector: 'app-seq-observer',
  templateUrl: './seq-observer.component.html',
  styleUrls: ['./seq-observer.component.css']
})
export class SeqObserverComponent implements OnInit {


  constructor() { }

  sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();
  return {unsubscribe() {}};
}

  sequence = new Observable(this.sequenceSubscriber);
  ngOnInit() {
    const myobserver = this.sequence.subscribe({
      next(msg) { console.log(msg); },
      complete() { console.log('Finished sequence'); }
    });
  }

}