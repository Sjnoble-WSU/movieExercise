import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordinputComponent } from './home/keywordinput/keywordinput.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultsComponent } from './home/results/results.component';
import { InfoPageComponent } from './info/info-page/info-page.component';


@NgModule({
  declarations: [
    AppComponent,
    KeywordinputComponent,
    ResultsComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
