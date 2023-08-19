import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SeriesComponent } from './series/series.component';
import { TrailersComponent } from './trailers/trailers.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, PayComponent, MoviesComponent, HomeComponent, CartComponent, SeriesComponent, TrailersComponent, ProfileComponent, SettingsComponent, AboutComponent, SignInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent },
    //   { path: 'pay', component: PayComponent },
    //   { path: 'movies', component: MoviesComponent },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
