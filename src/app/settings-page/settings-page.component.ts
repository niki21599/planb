import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {

  firstname = "Niklas"; 
  lastname = "Burg";
  roles = [
    {value: 'betreuer', viewValue: 'Azubi Betreuer'},
    {value: 'azubi', viewValue: 'Azubi'}
  ];
  selected = this.roles[1].value;

  


  onSubmit(): void{
    
  }

}
