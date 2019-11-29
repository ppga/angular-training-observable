import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EscInputComponent } from './esc-input/esc-input.component';
import { SeqObserverComponent } from './seq-observer/seq-observer.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EscInputComponent, SeqObserverComponent, BasicObservableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
