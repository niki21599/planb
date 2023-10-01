import { Component, OnInit } from '@angular/core';
import { ChapterServiceService } from '../service/chapter-service.service';
import { FirebaseService } from '../firebase.service';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor( private firebaseService: FirebaseService, public backend: BackendService){



  }

  ngOnInit(): void {
    this.backend.getAllChapters();
  }


  getPercantageValue(): number{
    let done = this.backend.getNumberOfCompletedSubchapters();
    let insgesamt = this.getNumberOfSubChapters();
    return done / insgesamt * 100;
  }

  getNumberOfCompletedMain(): number{
    return this.backend.getNumberOfCompletedMainChapters();
  }

  getNumberOfMain(): number{
    return this.backend.chapters.length;
  }

  getNumberOfSubChapters(): number{
    return this.backend.subChapters.length;
  }

  getNumberOfCompletedSubChapters(): number{
    return this.backend.getNumberOfCompletedSubchapters(); 
  }

  getHeadingOfNextChapter(): string{
    return this.backend.getNextChapter()?.subHeading ?? "du bist fertig";
  }

}
