import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  firstname = ""; 
  lastname = "";
  roles = [
    {value: 'betreuer', viewValue: 'Azubi Betreuer'},
    {value: 'azubi', viewValue: 'Azubi'}
  ];
  selected = this.roles[1].value;

  constructor(private backend: BackendService){}

  ngOnInit(): void {
    this.firstname = this.backend.user.firstName;
    this.lastname = this.backend.user.lastName;
    this.selected = this.backend.user.role;    
  }


  onSubmit(): void{
    this.backend.user.firstName = this.firstname;
    this.backend.user.lastName = this.lastname;
    this.backend.user.role = this.selected;
    this.backend.editUser(this.firstname, this.lastname, this.selected);
  }

}
