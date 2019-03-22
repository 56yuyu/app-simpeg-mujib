import { Component, OnInit } from '@angular/core';
import { AkunService } from '../akun/service/akun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: [ './logout.component.css' ]
})
export class LogoutComponent implements OnInit {

  constructor(private Auth: AkunService, 
    private router: Router) { }

  ngOnInit() {
    this.getInit();
  }

  getInit(): void {
    this.Auth.setLoggedIn(false);
    this.router.navigate(['login']);
  }

}