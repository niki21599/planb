import { Component } from '@angular/core';
import { SubChapter } from '../models/supChapter';
import { Chapter } from '../models/chapter';
import { ChapterServiceService } from '../service/chapter-service.service';
import { FirebaseService } from '../firebase.service';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  //chapters: Chapter[] = [];
  placeholder = []

  constructor(private chapterService: ChapterServiceService, public firebaseService: FirebaseService, public backend: BackendService){
   // this.chapters = this.chapterService.chapters;
  }

  getNumberOfCompleted(chapter: Chapter): number{
    let count =  0;

    /* for (const subChapter of chapter.subChapters) {
      if (subChapter.isComplete) {
        count++;
      }
    } */
    return count;
  }
}
