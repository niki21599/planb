import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated = true;

  constructor(public backend: BackendService, private router: Router){}

  ngOnInit(): void {
    
  }

  logout(){
    this.backend.user = undefined;
    this.router.navigate(["/login"])

  }
}
