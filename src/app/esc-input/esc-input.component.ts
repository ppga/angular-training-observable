import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-esc-input',
  templateUrl: './esc-input.component.html',
  styleUrls: ['./esc-input.component.css']
})
export class EscInputComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

fromEvent(target: HTMLInputElement, eventName: string) {
  return new Observable((observer) => {
    const handler = (e: unknown) => {observer.next(e);
    console.log("Key down: "+(e as KeyboardEvent).key+" event: "+JSON.stringify(e));};

    target.addEventListener(eventName, handler);

    return () => {
      target.removeEventListener(eventName, handler);
    };
  });
}
  ngAfterViewInit() {
  const ESC_KEY = 27;
  const nameInput = document.getElementById('yourname') as HTMLInputElement;
  this.fromEvent(nameInput, 'keydown')
  .subscribe((e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      nameInput.value = '';
    }
  });
}


}