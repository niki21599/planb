import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter';
import { SubChapter } from '../models/supChapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterServiceService {

  subChapters: SubChapter[] = [ new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content")]; 
  subChapters1: SubChapter[] = [new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content")]; 
  subChapters2: SubChapter[] = [new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content")]; 
  subChapters3: SubChapter[] = [new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content"), new SubChapter("Test 1 ", " test Content")]; 
  subChapters4: SubChapter[] = [new SubChapter("Test 1 ", " test Content")]; 
  subChapters5: SubChapter[] = [new SubChapter("Test 1 ", " test Content")]; 
  subChapters6: SubChapter[] = [new SubChapter("Test 1 ", " test Content")]; 


  chapter: Chapter = new Chapter("Kapitel 1 ", this.subChapters);
  chapter1: Chapter = new Chapter("Kapitel 2 ", this.subChapters1);
  chapter2: Chapter = new Chapter("Kapitel 3 ", this.subChapters2);
  chapter3: Chapter = new Chapter("Kapitel 4 ", this.subChapters3);
  chapter4: Chapter = new Chapter("Kapitel 5 ", this.subChapters4);
  chapter5: Chapter = new Chapter("Kapitel 6 ", this.subChapters5);
  chapter6: Chapter = new Chapter("Kapitel 7 ", this.subChapters6);


  chapters: Chapter[] = [this.chapter, this.chapter1, this.chapter2, this.chapter3, this.chapter4, this.chapter5, this.chapter6];



  getNumberOfMainChapters(): number{
    return this.chapters.length;
  }

  getNumberOfCompletedMainChapters(): number{
    let count = 0;

    for (const chapter of this.chapters) {
      if(chapter.isComplete()){
        count++;
      }
    }

    return count;
  }

  getNumberOfChapters(): number{
    let count = 0;
    for (const chapter of this.chapters) {
      count += chapter.subChapters.length
    }
    return count
  }

  getNumberOfCompletedChapters(): number{
    let count = 0;

    for (const chapter of this.chapters) {
      for (const subChapter of chapter.subChapters) {
        if(subChapter.isComplete){
          count++;
        }
      }
    }

    return count;
  }

  getNextChapter(): SubChapter | undefined{
    for (const chapter of this.chapters) {
      for (const subChapter of chapter.subChapters) {
        if(!subChapter.isComplete){
         return subChapter;
        }
      }
    
    }
    return undefined;
  }

  getCurrentMainChapter(): Chapter | undefined{
    for (const chapter of this.chapters) {
      if(!chapter.isComplete()){
        return chapter;
      }
    }
    return undefined
  }

  constructor() { }
}
