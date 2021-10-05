import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.router.navigate(["/list-actors"]);
    });
  }
}
