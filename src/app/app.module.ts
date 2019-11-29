import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module'
import { EscInputComponent } from import { HttpClientModule } from '@angular/common/http';

// const appRoutes: Routes = [
//   {path: '', component: DetailsComponent}
// ];


@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  HttpClientModule,
  AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, EscInputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
