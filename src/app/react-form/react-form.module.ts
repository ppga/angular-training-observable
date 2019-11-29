import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFormComponent } from './react-form.component';
import {ReactFormRoutingModule} from './react-form-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactFormRoutingModule,
    HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  ],
  declarations: [ReactFormComponent]
})
export class ReactFormModule { }