import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { ClientsComponent } from './views/clients/clients.component';
import { SpecComponent } from './views/spec/spec.component';
import { ContactComponent } from './views/contact/contact.component';
import { TeamComponent } from './views/team/team.component';
import { DifferenceComponent } from './views/difference/difference.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ClientsComponent,
    SpecComponent,
    ContactComponent,
    TeamComponent,
    DifferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
