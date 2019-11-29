import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import {DataExchangeModule} from './data-exchange/data-exchange.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  HttpClientModule,
  AppRoutingModule,
  DataExchangeModule],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
