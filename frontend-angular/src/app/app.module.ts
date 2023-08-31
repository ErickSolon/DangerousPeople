import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ListaComponent } from './views/lista/lista.component';
import { HomeComponent } from './views/home/home.component';
import { AddComponent } from './views/add/add.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { UpdateComponent } from './views/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ListaComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    RouterLink,
    DecimalPipe,
    NgFor,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
