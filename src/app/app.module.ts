import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EscInputComponent } from './esc-input/esc-input.component';
import { SeqObserverComponent } from './seq-observer/seq-observer.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { DataExchangeComponent } from './data-exchange/data-exchange.component';
import { SharedComponent } from './data-exchange/shared/shared.component';
import { AcompComponent } from './data-exchange/acomp/acomp.component';
import { BcompComponent } from './data-exchange/bcomp/bcomp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EscInputComponent, SeqObserverComponent, BasicObservableComponent, HttpObservableComponent, DataExchangeComponent, SharedComponent, AcompComponent, BcompComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
