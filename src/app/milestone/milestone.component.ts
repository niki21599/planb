import { Component } from '@angular/core';
import { ChapterServiceService } from '../service/chapter-service.service';
import { FirebaseService } from '../firebase.service';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {

  placeholder = []

constructor( public firebaseService: FirebaseService, public backend: BackendService){
}


}
