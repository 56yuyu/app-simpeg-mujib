import { Component, OnInit, Input } from '@angular/core';
import { AkunService } from '../akun/service/akun.service';
import { Akun } from '../akun/model/akun';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  
  @Input() akun: Akun;

  constructor(private Auth: AkunService, 
    private router: Router) { }


  ngOnInit() {
    this.getDatatable();
  }

  getDatatable(): void {
    
  }

  loginAkun(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUsername(username)
      .subscribe(akun => {

            if(akun!=null){

              this.Auth.getPassword(password)
              .subscribe(akunpwd => {
                if(akunpwd!=null){
                    if(akun.id_akun == akunpwd.id_akun){
                      
                      this.router.navigate(['dashboard']);
                      this.Auth.setLoggedIn(true);
                    } else {
                      alert('login gagal');
                    }
                }  else {
                  alert('login gagal');
                }
              });

            } else {
              alert('login gagal');
            }

      });
    
  }

}