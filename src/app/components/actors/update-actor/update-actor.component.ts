import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.css']
})
export class UpdateActorComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
  }

  //Get all Actors
  onGetActors() {
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  // Update an Actor
  onSelectUpdate(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/list-actors"]);
    });
  }
}
