import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItalianiComponent } from './italiani/italiani.component';
import { FrancesiComponent } from './francesi/francesi.component';
import { SpagnoliComponent } from './spagnoli/spagnoli.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItalianiComponent,
    FrancesiComponent,
    SpagnoliComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
