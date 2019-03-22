import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Akun } from '../akun/model/akun';
import { AkunService } from '../akun/service/akun.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
  
  akun: Akun = new Akun();

  constructor(private akunService: AkunService, private location: Location, 
    private router: Router) { }

  ngOnInit() {
    
  }

  save() {
    this.akunService.createAkun(this.akun)
      .subscribe(data => {
        if(data!=null){
            alert('Registrasi Berhasil');
            this.router.navigate(['login']);
        } else {
            alert('Registrasi Gagal');
        }
      });
  }

  onSubmit() {
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}