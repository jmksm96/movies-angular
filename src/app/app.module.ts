import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail/movie-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMoviesComponent,
    MovieComponent,
    MovieDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
