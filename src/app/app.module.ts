import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { EssaysComponent } from './essays/essays.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DailyUpdatesComponent,
    EssaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
