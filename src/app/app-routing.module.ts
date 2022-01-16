import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { EssaysComponent } from './essays/essays.component';

const routes: Routes = [
  { path: 'daily', component: DailyUpdatesComponent },
  { path: 'essays', component: EssaysComponent },
  { path: '', redirectTo: '/daily', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
