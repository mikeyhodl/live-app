import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PayComponent, MoviesComponent, HomeComponent],
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
