import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PayComponent } from './pay/pay.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'pay',
    component: PayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
