package com.mujib.restapi.repo;


import org.springframework.data.repository.CrudRepository;

import com.mujib.restapi.model.Akun;

public interface AkunRepository extends CrudRepository<Akun, Long> {
	Akun findByUsername(String username);
	Akun findByPassword(String password);
}
