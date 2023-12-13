import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItalianiComponent } from './italiani/italiani.component';
import { SpagnoliComponent } from './spagnoli/spagnoli.component';
import { FrancesiComponent } from './francesi/francesi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItalianiComponent,
    SpagnoliComponent,
    FrancesiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
