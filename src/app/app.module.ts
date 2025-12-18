import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { EssaysComponent } from './essays/essays.component';
import { PostComponent } from './post/post.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VarDirective } from './var-directive';

@NgModule({ declarations: [
        AppComponent,
        SummaryComponent,
        DailyUpdatesComponent,
        EssaysComponent,
        PostComponent,
        TopBarComponent,
        AboutMeComponent,
        WelcomeComponent,
        PortfolioComponent,
        VarDirective
    ],
    bootstrap: [AppComponent], imports: [MarkdownModule.forRoot({ loader: HttpClient }),
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
