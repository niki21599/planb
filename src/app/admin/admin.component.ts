import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  displayedColumns = ['name', 'nextChapter', 'progress'];

  elements = [
    {name: "Niklas Burg", nextChapter: "Prüfungsvorbereitung: Ehemalige Prüfungen durcharbeiten ", progress: 0.2}, 
    {name: "Max Mustermann", nextChapter: "Schriftliche Anmeldung bei der Industrie- und Handelskammer", progress: 0.33},
    {name: "Erika Mustermann", nextChapter: "Teil-2.3 Wirtschaft und Sozialkunde", progress: 0.67},

  ]

}
