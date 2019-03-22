package com.mujib.restapi.repo;


import org.springframework.data.repository.CrudRepository;

import com.mujib.restapi.model.Pegawai;

public interface PegawaiRepository extends CrudRepository<Pegawai, Long> {
	
}
