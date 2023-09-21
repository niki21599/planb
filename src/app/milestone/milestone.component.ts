import { Component } from '@angular/core';
import { ChapterServiceService } from '../service/chapter-service.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {


constructor(public chapterService: ChapterServiceService, public firebaseService: FirebaseService){
}


}
