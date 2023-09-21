import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, onSnapshot, updateDoc, query, where, addDoc } from '@angular/fire/firestore';
import { Chapter } from './models/chapter';
import { SubChapter } from './models/supChapter';
import { User } from './models/User';
import {AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  milestones: Chapter[] = [];
  user: User; 

  firestore: Firestore = inject(Firestore);
  unsub;

   updateSubchapter = async (docId, newValue, docIdMilestone) =>{
    let ref = doc(collection(this.firestore, `milestones/${docIdMilestone}/subChapter`), docId);
    await updateDoc(ref, {
     isCompleted: newValue
   })
  }

  updateUser = async ()=>{


  }

  constructor(private afs: AngularFireAuth) { 

    
    this.unsub = onSnapshot(this.getUserRef(), list =>{

    })

    //let ref = collection(doc(collection(this.firestore, "milestones"), "ce8cH57TgGcMdE5KjOvc"), "subChapter");
   this.unsub = onSnapshot(this.getMilestonesRef(), list => {
      this.milestones = [];
      list.forEach(el => {
        let milestone = this.setMilestone(el);
        let ref = collection(doc(collection(this.firestore, "milestones"), el.id), "subChapter");
        onSnapshot(ref, list =>{
          milestone.subChapters = [];
          list.forEach(ele => {
            let subChapter = this.setSubchapter(ele, el);
            milestone.subChapters.push(subChapter);
          })
        })
        this.milestones.push(milestone);
        console.log("mile", milestone, this.milestones);

      })
      
   })
    //this.items.unsubscribe();
  }

  authState = false;
  
  get isAuthenticated(): boolean{
    return this.authState;
  }

  async login(username: string, password: string){
    
    return this.afs.signInWithEmailAndPassword(username, password).then(userCredentials => {
        onSnapshot(this.getSingleRef("users", userCredentials.user.uid), user =>{
          this.setUser(user.data(), userCredentials.user.uid)
          this.authState = true;
        })

     })
  }

  logout(){

  }

  setUser(user, uid){
    this.user = new User();
    this.user.firstname = user.firstname;
    this.user.lastname = user.lastname;
    this.user.role = user.role;
    this.user.userId = uid;
  }


  async register(username: string, firstname: string, lastname: string, password: string){
   await this.afs.createUserWithEmailAndPassword( username, password).then(userCredentials => {
   
   });
  }

  ngOnDestroy(){
    this.unsub();
  }

  setMilestone(el){
    let title = el.data().heading;
    let milestone = new Chapter(title, []);
    milestone.id = el.id;
    return milestone;
  }

  setSubchapter(el, elOfParent){
    let heading = el.data().heading;
    let text = el.data().text;
    let isCompleted = el.data().isCompleted;
    let subChapter = new SubChapter(heading, text, isCompleted);
    subChapter.id = el.id;
    subChapter.idOfMilestone = elOfParent.id;
    return subChapter
  }



  getMilestonesRef(){
   // console.log("collection", collection(this.firestore, "milestones"));
    return collection(this.firestore, "milestones"); 
  }

  getUserRef(){
    return collection(this.firestore, "users");
  }

  getSingleRef(colId: string, docId: string){
    return doc(collection(this.firestore, colId), docId);
  }

  getNumberOfMainChapters(): number{
    return this.milestones.length;
  }

  getNumberOfCompletedMainChapters(): number{
    let count = 0;

    for (const chapter of this.milestones) {
      if(chapter.isComplete()){
        count++;
      }
    }

    return count;
  }

  getNumberOfChapters(): number{
    let count = 0;
    for (const chapter of this.milestones) {
      count += chapter.subChapters.length
    }
    return count
  }

  getNumberOfCompletedChapters(): number{
    let count = 0;

    for (const chapter of this.milestones) {
      for (const subChapter of chapter.subChapters) {
        if(subChapter.isComplete){
          count++;
        }
      }
    }

    return count;
  }

  getCurrentChapter(): SubChapter | undefined{
    for (const chapter of this.milestones) {
      for (const subChapter of chapter.subChapters) {
        if(!subChapter.isComplete){
         return subChapter;
        }
      }
    }
    return undefined;
  }

  getNextChapter(): SubChapter | undefined{
    for (const chapter of this.milestones) {
      for (const subChapter of chapter.subChapters) {
        if(!subChapter.isComplete){
         return subChapter;
        }
      }
    
    }
    return undefined;
  }

  getCurrentMainChapter(): Chapter | undefined{
    for (const chapter of this.milestones) {
      if(!chapter.isComplete()){
        return chapter;
      }
    }
    return undefined
  }

}
