import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ReminderPageComponent } from './pages/reminder-page/reminder-page.component';
import { ArchivePageComponent } from './pages/archive-page/archive-page.component';
import { TrashPageComponent } from './pages/trash-page/trash-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditLabelComponent } from './components/edit-label/edit-label.component';
import { LabelPageComponent } from './pages/label-page/label-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CircleButtonComponent,
    SearchBarComponent,
    SideBarComponent,
    MenuItemComponent,
    ReminderPageComponent,
    ArchivePageComponent,
    TrashPageComponent,
    HomePageComponent,
    EditLabelComponent,
    LabelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
