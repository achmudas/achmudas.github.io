import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { EssaysComponent } from './essays/essays.component';
import { PostComponent } from './post/post.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'welcome', component: WelcomeComponent,
      children: [
        { path: 'daily', component: DailyUpdatesComponent},
        { path: 'essays', component: EssaysComponent}
      ]},
  { path: '', redirectTo: 'welcome/daily', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
