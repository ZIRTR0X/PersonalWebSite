import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { FooterModule } from './footer/footer.module';
import { WorkModule } from './work/work.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { DarkModeToggleButtonModule } from './dark-mode-toggle-button/dark-mode-toggle-button.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MobileNavbarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-XCFJ5ZRZMV'),
    NgxGoogleAnalyticsRouterModule,
    FooterModule,
    WorkModule,
    AngularSvgIconModule.forRoot(),
    HomeModule,
    ContactModule,
    DarkModeToggleButtonModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
