import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputsComponent } from './inputs/inputs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dropdown1Component } from './dropdown1/dropdown1.component';
import { DroplistComponent } from './droplist/droplist.component';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    Dropdown1Component,
    DroplistComponent,
    HeaderComponent,
    CardsComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    DroplistComponent,
    CardsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
