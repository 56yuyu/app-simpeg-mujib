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

import com.mujib.restapi.model.Akun;
import com.mujib.restapi.repo.AkunRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AkunController {

	@Autowired
	AkunRepository repository;

	@GetMapping("/akun")
	public List<Akun> getAllAkun() {
		System.out.println("Get data Akun...");

		List<Akun> akun = new ArrayList<>();
		repository.findAll().forEach(akun::add);

		return akun;
	}
	
	@GetMapping(value = "akun/usrname/{id}")
	public Akun postLoginUsrname(@PathVariable String id) {
		Akun _getUsername = repository.findByUsername(id);
		return _getUsername;
	}
	
	@GetMapping(value = "akun/pwd/{id}")
	public Akun postLoginPwd(@PathVariable String id) {
		Akun _getPwd = repository.findByPassword(id);
		return _getPwd;
	}

	@PostMapping(value = "/akun/create")
	public Akun postAkun(@RequestBody Akun akun) {

		Akun _akun = repository.save(new Akun( akun.getUsername(), akun.getPassword(), 
				akun.getNama(), akun.getEmail() ));
		return _akun;
	}

	@DeleteMapping("/akun/{id}")
	public ResponseEntity<String> deleteAkun(@PathVariable("id") long id) {
		System.out.println("Delete Akun with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("Akun has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/akun/delete")
	public ResponseEntity<String> deleteAllAkun() {
		System.out.println("Delete All Akun...");

		repository.deleteAll();

		return new ResponseEntity<>("All akun have been deleted!", HttpStatus.OK);
	}
	
	@GetMapping(value = "akun/detail/{id}")
	public List<Akun> findByAkunId(@PathVariable long id) {
		System.out.println("Get Akun with ID = " + id + "...");
		
		Akun obj = repository.findById(id).get();
		List<Akun> akun = new ArrayList<>();
		akun.add(obj);
		
		return akun;
	}

	@PutMapping("/akun/{id}")
	public ResponseEntity<Akun> updateAkun(@PathVariable("id") long id, @RequestBody Akun akun) {
		System.out.println("Update Akun with ID = " + id + "...");

		Optional<Akun> akunData = repository.findById(id);

		if (akunData.isPresent()) {
			Akun _akun = akunData.get();
			_akun.setUsername(akun.getUsername());
			_akun.setPassword(akun.getPassword());
			_akun.setNama(akun.getNama());
			_akun.setEmail(akun.getEmail());
			
			return new ResponseEntity<>(repository.save(_akun), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
