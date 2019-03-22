import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AkunService } from '../akun/service/akun.service';
import { Router } from '@angular/router';
import { Pegawai } from './model/pegawai';
import { PegawaiService } from './service/pegawai.service';

@Component({
  selector: 'create-pegawai',
  templateUrl: './addpegawai.component.html',
  styleUrls: ['./addpegawai.component.css']
})
export class PegawaiAddComponent implements OnInit {

  pegawai: Pegawai = new Pegawai();
  submitted = false;

  constructor(private pegawaiService: PegawaiService, 
    private location: Location,
    private Auth: AkunService, 
    private router: Router) { }

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

  save() {
    this.pegawaiService.createPegawai(this.pegawai)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pegawai = new Pegawai();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
