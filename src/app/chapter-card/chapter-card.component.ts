import { Component, Input} from '@angular/core';
import { SubChapter } from '../models/supChapter';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent {
  @Input() chapterCard: SubChapter = new SubChapter("", "");

  constructor(public firebaseService: FirebaseService){
  }

  toggleComplete(){
    //this.chapterCard.isComplete = !this.chapterCard.isComplete;
    this.firebaseService.updateSubchapter(this.chapterCard.id, !this.chapterCard.isComplete, this.chapterCard.idOfMilestone);
  }
}
