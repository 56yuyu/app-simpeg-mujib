import { Component, OnInit, Input } from '@angular/core';
import { PegawaiService } from '../service/pegawai.service';
import { Pegawai } from '../model/pegawai';
import { PegawaiComponent } from '../pegawai.component';

@Component({
  selector: 'pegawai-adapter',
  templateUrl: './pegawaiadapter.component.html',
  styleUrls: ['./pegawaiadapter.component.css']
})
export class PegawaiAdapterComponent implements OnInit {

  @Input() pegawai: Pegawai;

  constructor(private pegawaiService: PegawaiService, private listComponent: PegawaiComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.pegawaiService.updatePegawai(this.pegawai.idPegawai, 
      { nama: this.pegawai.nama, nip: this.pegawai.nip, jenisKelamin: this.pegawai.jenisKelamin,
        alamat: this.pegawai.alamat, telpon: this.pegawai.telpon, jabatan: this.pegawai.jabatan, 
        divisi: this.pegawai.divisi, usia: this.pegawai.usia, lamaBekerja: this.pegawai.lamaBekerja, 
        status: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.pegawai = data as Pegawai;
        },
        error => console.log(error));
  }

  deletePegawai() {
    this.pegawaiService.deletePegawai(this.pegawai.idPegawai)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
