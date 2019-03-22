package com.mujib.restapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "akun")
public class Akun {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_akun;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "nama")
	private String nama;
	
	@Column(name = "email")
	private String email;
	
	public Akun() {
		
	}
	
	public Akun(String username, String password, String nama, String email) {
		this.username = username;
		this.password = password;
		this.nama = nama;
		this.email = email;
	}
	
	public long getId_akun() {
		return id_akun;
	}
	public void setId_akun(long id_akun) {
		this.id_akun = id_akun;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Override
	public String toString() {
		return "Akun [id_akun=" + id_akun + ", username=" + username + ", password=" + password + ", nama=" + nama + ", email=" + email + "]";
	}
	
	
}
