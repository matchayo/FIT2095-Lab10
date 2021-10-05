import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActorsComponent } from './components/actors/list-actors/list-actors.component';
import { AddActorComponent } from './components/actors/add-actor/add-actor.component';
import { UpdateActorComponent } from './components/actors/update-actor/update-actor.component';
import { DeleteActorComponent } from './components/actors/delete-actor/delete-actor.component';
import { DatabaseService } from './services/database/database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { DeleteMovieComponent } from './components/movies/delete-movie/delete-movie.component';
import { ListMoviesComponent } from './components/movies/list-movies/list-movies.component';
import { AddActorToMovieComponent } from './components/movies/add-actor-to-movie/add-actor-to-movie.component';
import { ViewNotFoundComponent } from './components/view-not-found/view-not-found.component';
import { AgePipe } from './pipes/age/age.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListActorsComponent,
    AddActorComponent,
    UpdateActorComponent,
    DeleteActorComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMoviesComponent,
    AddActorToMovieComponent,
    ViewNotFoundComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
