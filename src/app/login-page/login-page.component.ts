import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

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


  constructor(private firebase: FirebaseService, private router: Router){

  }

  ngOnInit(): void {
    
  }

 async onSubmit(){
    this.firebase.login(this.username, this.password).then((res: any)=> {
      this.router.navigateByUrl("");
      console.log("moin");
    }).catch(err => {
      this.loginValid = false;
    }) 
  }
}
