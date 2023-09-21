import { Injectable, assertPlatform } from '@angular/core';
import {  EmailAuthCredential, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, inject} from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private afs: AngularFireAuth) { 
//this.auth = getAuth();
  }

  authState = false;


  
  get isAuthenticated(): boolean{
    return this.authState;
  }

  async login(username: string, password: string){
    
     this.afs.signInWithEmailAndPassword(username, password).then(userCredentials => {
        console.log(userCredentials.user);
        
     })
  }

  logout(){

  }


  async register(username: string, firstname: string, lastname: string, password: string){
   await this.afs.createUserWithEmailAndPassword( username, password);
  }

  
}
