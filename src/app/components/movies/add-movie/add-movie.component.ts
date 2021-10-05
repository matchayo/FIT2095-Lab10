import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title: string = "";
  year: number = 0;
  movieId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/list-movies"]);
    });
  }
}
