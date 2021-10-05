import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.css']
})
export class DeleteActorComponent implements OnInit {
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit(): void {
    this.onGetActors();
  }

  //Get all Actors
  onGetActors() {
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  //Delete Actor
  onDeleteActor(item: any) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/list-actors"]);
    });
  }
}
