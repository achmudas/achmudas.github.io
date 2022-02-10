import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { EssaysComponent } from './essays/essays.component';
import { PostComponent } from './post/post.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DailyUpdatesComponent,
    EssaysComponent,
    PostComponent,
    TopBarComponent,
    AboutMeComponent,
    WelcomeComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
