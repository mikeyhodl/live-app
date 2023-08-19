import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PayComponent } from './pay/pay.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'wild-n-out',
    component: PayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
