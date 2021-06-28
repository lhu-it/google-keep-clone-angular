import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivePageComponent } from './pages/archive-page/archive-page.component';
import { EditLabelComponent } from './components/edit-label/edit-label.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LabelPageComponent } from './pages/label-page/label-page.component';
import { ReminderPageComponent } from './pages/reminder-page/reminder-page.component';
import { TrashPageComponent } from './pages/trash-page/trash-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'reminders', component: ReminderPageComponent },
  { path: 'label/:slug', component: LabelPageComponent },
  { path: 'archive', component: ArchivePageComponent },
  { path: 'trash', component: TrashPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
