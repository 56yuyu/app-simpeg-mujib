package com.mujib.restapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mujib.restapi.model.Pegawai;
import com.mujib.restapi.repo.PegawaiRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PegawaiController {

	@Autowired
	PegawaiRepository repository;

	@GetMapping("/pegawai")
	public List<Pegawai> getAllPegawai() {
		System.out.println("Get data Pegawai...");

		List<Pegawai> pegawai = new ArrayList<>();
		repository.findAll().forEach(pegawai::add);

		return pegawai;
	}

	@PostMapping(value = "/pegawai/create")
	public Pegawai postPegawai(@RequestBody Pegawai pegawai) {

		Pegawai _pegawai = repository.save(new Pegawai(pegawai.getNip(), pegawai.getNama(), 
				pegawai.getJenisKelamin(), pegawai.getAlamat(), pegawai.getTelpon(), pegawai.getJabatan(),
				pegawai.getDivisi(), pegawai.getUsia(), pegawai.getLamaBekerja()));
		return _pegawai;
	}

	@DeleteMapping("/pegawai/{id}")
	public ResponseEntity<String> deletePegawai(@PathVariable("id") long id) {
		System.out.println("Delete Pegawai with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("Pegawai has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/pegawai/delete")
	public ResponseEntity<String> deleteAllPegawai() {
		System.out.println("Delete All Pegawai...");

		repository.deleteAll();

		return new ResponseEntity<>("All pegawai have been deleted!", HttpStatus.OK);
	}
	
	@GetMapping(value = "pegawai/detail/{id}")
	public List<Pegawai> findByPegId(@PathVariable long id) {
		System.out.println("Get Pegawai with ID = " + id + "...");
		
		Pegawai obj = repository.findById(id).get();
		List<Pegawai> pegawai = new ArrayList<>();
		pegawai.add(obj);
		
		return pegawai;
	}

	@PutMapping("/pegawai/{id}")
	public ResponseEntity<Pegawai> updatePegawai(@PathVariable("id") long id, @RequestBody Pegawai pegawai) {
		System.out.println("Update Pegawai with ID = " + id + "...");

		Optional<Pegawai> pegawaiData = repository.findById(id);

		if (pegawaiData.isPresent()) {
			Pegawai _pegawai = pegawaiData.get();
			_pegawai.setNip(pegawai.getNip());
			_pegawai.setNama(pegawai.getNama());
			_pegawai.setJenisKelamin(pegawai.getJenisKelamin());
			_pegawai.setAlamat(pegawai.getAlamat());
			_pegawai.setTelpon(pegawai.getTelpon());
			_pegawai.setJabatan(pegawai.getJabatan());
			_pegawai.setDivisi(pegawai.getDivisi());
			_pegawai.setUsia(pegawai.getUsia());
			_pegawai.setLamaBekerja(pegawai.getLamaBekerja());
			_pegawai.setStatus(pegawai.getStatus());
			return new ResponseEntity<>(repository.save(_pegawai), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
