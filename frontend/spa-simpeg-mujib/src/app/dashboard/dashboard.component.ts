import { Component, OnInit } from '@angular/core';
import { AkunService } from '../akun/service/akun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  constructor(private Auth: AkunService, 
    private router: Router) { }

  ngOnInit() {
    this.getInit();
  }

  getInit(): void {
    if(!this.Auth.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

}