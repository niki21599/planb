import { Component } from '@angular/core';
import { ChapterServiceService } from '../service/chapter-service.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private firebaseService: FirebaseService){



  }


  getPercantageValue(): number{
    let done = this.firebaseService.getNumberOfCompletedChapters();
    let insgesamt = this.firebaseService.getNumberOfChapters();
    return done / insgesamt * 100;
  }

  getNumberOfCompletedMain(): number{
    return this.firebaseService.getNumberOfCompletedMainChapters();
  }

  getNumberOfMain(): number{
    return this.firebaseService.getNumberOfMainChapters()
  }

  getNumberOfSubChapters(): number{
    return this.firebaseService.getNumberOfChapters(); 
  }

  getNumberOfCompletedSubChapters(): number{
    return this.firebaseService.getNumberOfCompletedChapters(); 
  }

  getHeadingOfNextChapter(): string{

    return this.firebaseService.getNextChapter()?.subHeading ?? "du bist ferti";
  }

}
