import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActorComponent } from './components/actors/add-actor/add-actor.component';
import { DeleteActorComponent } from './components/actors/delete-actor/delete-actor.component';
import { ListActorsComponent } from './components/actors/list-actors/list-actors.component';
import { UpdateActorComponent } from './components/actors/update-actor/update-actor.component';
import { AddActorToMovieComponent } from './components/movies/add-actor-to-movie/add-actor-to-movie.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { DeleteMovieComponent } from './components/movies/delete-movie/delete-movie.component';
import { ListMoviesComponent } from './components/movies/list-movies/list-movies.component';
import { ViewNotFoundComponent } from './components/view-not-found/view-not-found.component';

const routes: Routes = [
  { path: "list-actors", component: ListActorsComponent },
  { path: "add-actor", component: AddActorComponent },
  { path: "update-actor", component: UpdateActorComponent },
  { path: "delete-actor", component: DeleteActorComponent },
  { path: "list-movies", component: ListMoviesComponent },
  { path: "add-movie", component: AddMovieComponent },
  { path: "delete-movie", component: DeleteMovieComponent },
  { path: "add-actor-to-movie", component: AddActorToMovieComponent },
  { path: "", redirectTo: "/list-actors", pathMatch: "full" },
  { path: "**", component: ViewNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
