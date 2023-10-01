import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginValid: boolean = true;
  username: string = ""; 
  password: string = "";
  isAuthenticated: boolean = false;


  constructor(private backend: BackendService, private router: Router){

  }

  ngOnInit(): void {
    this.backend.getAllUsers();
  }

 async onSubmit(){
    let loginSuccesful = this.backend.login(this.username, this.password); 
    if(loginSuccesful){
      this.router.navigateByUrl("");
    }else{
      this.loginValid = false;
    }
  }
}
