package com.teste.neliogodoi.fullstack.security;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class ClientCheckAuth {
	
	@GetMapping
	public ResponseEntity<String> checkAuth() {
		return ResponseEntity.ok("Authenticated");
	}

}
