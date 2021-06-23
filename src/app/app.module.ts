import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CircleButtonComponent,
    SearchBarComponent,
    SideBarComponent,
    MenuItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
