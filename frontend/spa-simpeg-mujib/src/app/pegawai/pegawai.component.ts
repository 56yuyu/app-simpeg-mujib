import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AkunService } from '../akun/service/akun.service';
import { Router } from '@angular/router';
import { PegawaiService } from './service/pegawai.service';
import { Pegawai } from './model/pegawai';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: [ './pegawai.component.css' ]
})
export class PegawaiComponent implements OnInit {
  
  datapegawai: Observable<Pegawai[]>;

  constructor(private pegawaiService: PegawaiService,
    private Auth: AkunService, 
    private router: Router) { }

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      this.router.navigate(['login']);
    } else {
      this.reloadData();
    }
  }

  deletePegawai() {
    this.pegawaiService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.datapegawai = this.pegawaiService.getPegawaiList();
  }

}