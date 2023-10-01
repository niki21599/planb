import { Component, Input, OnInit} from '@angular/core';
import { SubChapter } from '../models/supChapter';
import { FirebaseService } from '../firebase.service';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent implements OnInit {
  @Input() chapterCard: SubChapter;

  constructor(public firebaseService: FirebaseService, private backend: BackendService){
  }

  ngOnInit(): void {
    console.log(this.chapterCard)
  }
  

  toggleComplete(){
    this.chapterCard.isComplete = !this.chapterCard.isComplete;
    this.backend.toggleSubChapter(this.chapterCard);
    //this.chapterCard.isComplete = !this.chapterCard.isComplete;
  //  this.firebaseService.updateSubchapter(this.chapterCard.id, !this.chapterCard.isComplete, this.chapterCard.idOfMilestone);
  }
}
