package com.mujib.restapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pegawai")
public class Pegawai {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_pegawai;
	
	@Column(name = "nip")
	private String nip;
	
	@Column(name = "nama")
	private String nama;
	
	@Column(name = "jenis_kelamin")
	private int jenisKelamin;
	
	@Column(name = "alamat")
	private String alamat;
	
	@Column(name = "telpon")
	private String telpon;
	
	@Column(name = "jabatan")
	private String jabatan;
	
	@Column(name = "divisi")
	private String divisi;
	
	@Column(name = "usia")
	private int usia;
	
	@Column(name = "lama_bekerja")
	private int lamaBekerja;
	
	@Column(name = "status")
	private boolean status;
	
	public Pegawai() {
	}

	public Pegawai(String nip, String nama, int jenisKelamin, String alamat, String telpon, 
					String jabatan, String divisi, int usia, int lamaBekerja) {
		this.nip = nip;
		this.nama = nama;
		this.jenisKelamin = jenisKelamin;
		this.alamat = alamat;
		this.telpon = telpon;
		this.jabatan = jabatan;
		this.divisi = divisi;
		this.usia = usia;
		this.lamaBekerja = lamaBekerja;
		this.status = true;
	}
	public long getIdPegawai() {
		return id_pegawai;
	}
	public void setIdPegawai(long idPegawai) {
		this.id_pegawai = idPegawai;
	}
	public String getNip() {
		return nip;
	}
	public void setNip(String nip) {
		this.nip = nip;
	}
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public int getJenisKelamin() {
		return jenisKelamin;
	}
	public void setJenisKelamin(int jenisKelamin) {
		this.jenisKelamin = jenisKelamin;
	}
	public String getAlamat() {
		return alamat;
	}
	public void setAlamat(String alamat) {
		this.alamat = alamat;
	}
	public String getTelpon() {
		return telpon;
	}
	public void setTelpon(String telpon) {
		this.telpon = telpon;
	}
	public String getJabatan() {
		return jabatan;
	}
	public void setJabatan(String jabatan) {
		this.jabatan = jabatan;
	}
	public String getDivisi() {
		return divisi;
	}
	public void setDivisi(String divisi) {
		this.divisi = divisi;
	}
	public int getUsia() {
		return usia;
	}
	public void setUsia(int usia) {
		this.usia = usia;
	}
	public int getLamaBekerja() {
		return lamaBekerja;
	}
	public void setLamaBekerja(int lamaBekerja) {
		this.lamaBekerja = lamaBekerja;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Pegawai [id_pegawai=" + id_pegawai + ", nip=" + nip + ", nama=" + nama + ", jenis_kelamin=" + jenisKelamin 
				+ ", alamat=" + alamat + ", telpon=" + telpon + ", jabatan=" + jabatan + ", divisi=" + divisi + ", usia=" + usia + ", lama_bekerja=" + lamaBekerja + ", status=" + status + "]";
	}
	
	
}
