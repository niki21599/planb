import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['name', 'nextChapter', 'progress'];

  constructor(public backend: BackendService){}

ngOnInit(): void {
  this.elements = [];
  for(let user of this.backend.allUsers){
    let elem = {name: "", nextChapter: "", progress: 0.0}
    elem.name = user.firstName + " " + user.lastName;
    elem.nextChapter = this.backend.getNextChapterOfUser(user);
    elem.progress = this.backend.getProgress(user);
    this.elements.push(elem);
  }
}

  elements = [

  ]

}
