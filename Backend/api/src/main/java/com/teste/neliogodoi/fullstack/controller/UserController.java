package com.teste.neliogodoi.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.neliogodoi.fullstack.service.UserService;

@Service
@RestController
@RequestMapping("usuario")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("{id_user}")
	public ResponseEntity<String> findUser(@PathVariable Long id_user) {
		try {
			String usuario = this.userService.findUser(id_user);
			return ResponseEntity.ok(usuario);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("JsonPlaceholder está fora de alcance!");
		}
	}
	
	@GetMapping
	public ResponseEntity<String> findAllUser() {
		try {
			String usuarios = this.userService.findUser();
			return ResponseEntity.ok(usuarios);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("JsonPlaceholder está fora de alcance!");
		}
	}
	
}
