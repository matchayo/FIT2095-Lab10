import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-add-actor-to-movie',
  templateUrl: './add-actor-to-movie.component.html',
  styleUrls: ['./add-actor-to-movie.component.css']
})
export class AddActorToMovieComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  actor: any = {};
  movieId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }

  // addActorToMovie(id: string, actor: object)

  //Get all Actors
  onGetActors() {
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  //Get all Movies
  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  onSelectActor(actor:any) {
    this.actor = actor;
  }

  onSelectMovie(movie:any) {
    this.movieId = movie._id;
  }

  onAddActorToMovie() {
    this.dbService.addActorToMovie(this.movieId, this.actor).subscribe((data: any) => {
      this.onGetMovies();
      this.router.navigate(["/list-movies"]);
    });
  }
}
