import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AkunService } from '../akun/service/akun.service';

import { Pegawai } from './model/pegawai';
import { PegawaiService } from './service/pegawai.service';

@Component({
  selector: 'edit-pegawai',
  templateUrl: './editpegawai.component.html',
  styleUrls: ['./editpegawai.component.css']
})
export class PegawaiEditComponent implements OnInit {
  @Input() pegawai: Pegawai;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pegawaiService: PegawaiService,
    private location: Location,
    private Auth: AkunService, 
  ) {}

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      this.router.navigate(['login']);
    } else {
      this.getPegawai();
    }
  }

  getPegawai(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.pegawaiService.getDataPegawai(id)
      .subscribe(pegawai => this.pegawai = pegawai);

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    
    this.pegawaiService.updateDataPegawai(this.pegawai[0].idPegawai, this.pegawai[0])
      .subscribe(() => this.goBack());

  }

}
