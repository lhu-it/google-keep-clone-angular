import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NotFoundComponent },
  { path: 'reminders', component: NotFoundComponent },
  { path: 'edit', component: NotFoundComponent },
  { path: 'archive', component: NotFoundComponent },
  { path: 'trash', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
