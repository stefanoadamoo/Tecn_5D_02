import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ItalianiComponent } from './italiani/italiani.component';
import { FrancesiComponent } from './francesi/francesi.component';
import { SpagnoliComponent } from './spagnoli/spagnoli.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ItalianiComponent,
    FrancesiComponent,
    SpagnoliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
