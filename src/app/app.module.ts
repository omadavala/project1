import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mobile1Component } from './mobile1/mobile1.component';
import { Mobile2Component } from './mobile2/mobile2.component';
import { Mobile3Component } from './mobile3/mobile3.component';
import { Mobile4Component } from './mobile4/mobile4.component';
import { Mobile5Component } from './mobile5/mobile5.component';
import { Mobile6Component } from './mobile6/mobile6.component';


@NgModule({
  declarations: [
    AppComponent,
    Mobile1Component,
    Mobile2Component,
    Mobile3Component,
    Mobile4Component,
    Mobile5Component,
    Mobile6Component,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
