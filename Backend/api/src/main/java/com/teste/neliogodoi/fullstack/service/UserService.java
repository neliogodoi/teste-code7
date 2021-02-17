package com.teste.neliogodoi.fullstack.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "https://jsonplaceholder.typicode.com/users", name = "users")
public interface UserService  {
	
	@GetMapping
	String findUser();
	
	@GetMapping("/{userid}")
	String findUser(@PathVariable("userid") Long userid);
	
}
