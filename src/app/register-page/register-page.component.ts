import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  loginValid: boolean = true;

  username: string = ""; 
  firstname: string = ""; 
  lastname: string = ""; 
  password: string = "";

  constructor(private firebase: FirebaseService, private router: Router){}

  onSubmit(){
    this.firebase.register(this.username, this.firstname, this.lastname, this.password).then((res: any) =>
      { this.router.navigateByUrl("")}
    ).catch(
      err => this.loginValid = false

    )

  }

}
