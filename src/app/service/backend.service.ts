import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Chapter } from '../models/chapter';
import { SubChapter } from '../models/supChapter';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  user: User | undefined; 
  allUsers: User[] = [];
  allChapters: Chapter[] = []; 
  chapters: Chapter[] = [];
  allSubChapters: SubChapter[] = []
  subChapters: SubChapter[] = []

  url = "https://wbh-planb.onrender.com/";

  constructor(private http:HttpClient) { }


  getAllUsers(){
    this.http.get<User[]>(this.url + "users").subscribe(users => {
      this.allUsers = users;
    });
  }

  getAllChapters(){
    this.http.get<Chapter[]>(this.url + "chapter").subscribe(chapters => {
      this.allChapters = chapters; 
      this.chapters = this.allChapters.filter(chap => chap.userId == this.user.id);
      this.getAllSubChapters();
    });
  }

  getSubChaptersFromChapter(id: number): SubChapter[]{
    return this.subChapters.filter(subChap => subChap.chapterId == id);

  }

  getNextChapterOfUser(user: User): string{
    let subChapters = []
    let chapters = this.allChapters.filter(chap => chap.userId == user.id); 
    for(let chap of chapters){
      let subChaps = this.allSubChapters.filter(subChaps => subChaps.chapterId == chap.id)

      for(let subChap of subChaps){
        subChapters.push(subChap);
      }
    }
    
    for(let subChap of subChapters){
      if(subChap.isComplete == false)
        return subChap.subHeading;
    }
    return "fertig";
  }

  getProgress(user: User): number{
    let subChapters = []
    let chapters = this.allChapters.filter(chap => chap.userId == user.id); 

    for(let chap of chapters){
      let subChaps = this.allSubChapters.filter(subChaps => subChaps.chapterId == chap.id)

      for(let subChap of subChaps){
        subChapters.push(subChap);
      }
    }
    let completed = 0;
    for(let subChap of subChapters){
      if(subChap.isComplete == true)
        completed++;
    }
    return completed / subChapters.length
  }

  getAllSubChapters(){
    this.http.get<SubChapter[]>(this.url + "subchapter").subscribe(subChapters => {
      this.allSubChapters = subChapters;
      this.subChapters = [];
      for(let chapter of this.chapters){
        let chaptersToAdd = this.allSubChapters.filter(subChap => subChap.chapterId == chapter.id);
        for(let chapterToAdd of chaptersToAdd){
          this.subChapters.push(chapterToAdd);
        }
      }
    });
  }

  login(email: string, password: String): boolean{
    for (const user of this.allUsers) {
      if(user.email.toLowerCase() == email.toLowerCase() && user.password == password){
        this.user = user;
        return true;
      }  
    }
    return false;
  }

  logout(){
    this.user = undefined; 
  }

  register(email: string, password: string, firstName: string, lastName: string ){}

  editUser(firstName: string, lastName: string, role: string,){
    //this.http.put(this.url + "users/" + 1, {id: 1,firstName, lastName, role, email: "niklas@gmail.com", password: "Sommer01"}).subscribe()
    this.http.put(this.url + "users/" + this.user.id, {id: this.user.id,firstName, lastName, role, email: this.user.email, password: this.user.password}).subscribe();

  }

  toggleSubChapter(subChapter: SubChapter){
    this.http.put(this.url + "subchapter/" + subChapter.id, {id: subChapter.id, text: subChapter.text, chapterId: subChapter.chapterId, subHeading: subChapter.subHeading, isComplete: subChapter.isComplete}).subscribe()
  }

  getNumberOfCompletedSubchapters(): number{
    let completed = 0;

    for(let subChap of this.subChapters){
      if(subChap.isComplete)
        completed++;
    }

    return completed;
  }

  getNumberOfCompletedMainChapters(): number{
    let completed = 0;
    for(let chapter of this.chapters){
      let subChaps = this.subChapters.filter(chap => chap.chapterId == chapter.id)
      let completedSubs = 0;
      for(let subChap of subChaps){
        if(subChap.isComplete)
          completedSubs++;
      }
      if (completedSubs == subChaps.length) {
        completed++;
      }

    }
    return completed;
  }
  getNextChapter(): SubChapter | undefined{
    for(let subChap of this.subChapters){
      if(subChap.isComplete == false)
        return subChap;
    }
    return undefined;
  }

}
