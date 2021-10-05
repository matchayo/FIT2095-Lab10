import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  //Get all Movies
  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  //Delete Actor
  onDeleteMovie(item: any) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/list-movies"]);
    });
  }
}
