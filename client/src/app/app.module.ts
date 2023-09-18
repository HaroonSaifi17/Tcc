import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './pages/home-page/navbar/navbar.component';
import { AboutComponent } from './pages/home-page/about/about.component';
import { EventsComponent } from './pages/home-page/events/events.component';
import { FooterComponent } from './pages/home-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
