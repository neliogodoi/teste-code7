package com.teste.neliogodoi.fullstack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.neliogodoi.fullstack.model.Debt;
import com.teste.neliogodoi.fullstack.repository.DebtRepository;

@Service
@RestController
@RequestMapping("divida")
public class DebtController {
	
	@Autowired
	private DebtRepository repository;
	
	@PostMapping
	public ResponseEntity<Debt> saveDivida(@RequestBody Debt debt) {
		if(debt.getValor() >= 0.01) {
			Debt saved = this.repository.save(debt);
			if(saved != null)
				return ResponseEntity.ok(saved);
			else
				return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
		
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Debt> findDivida(@PathVariable String id) {
		Optional<Debt> debt = this.repository.findById(id);
		if(debt.isPresent())
			return ResponseEntity.ok(debt.get());
		else
			return ResponseEntity.notFound().build();
	}
	
	@GetMapping("devedor/{id}")
	public ResponseEntity<List<Debt>> findDividasByUser(@PathVariable Long id) {
		List<Debt> debts = this.repository.findDividaByIdUser(id);
		if(!debts.isEmpty())
			return ResponseEntity.ok(debts);
		else
			return ResponseEntity.notFound().build();
	}
	
	@PutMapping
	public ResponseEntity<Debt> updateDivida(@RequestBody Debt debt) {
		Optional<Debt> debtSaved = this.repository.findById(debt.getId());
		if(debtSaved.isPresent()) {
			this.repository.save(debt);
			return ResponseEntity.ok(debt);
		} else
			return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Debt> deleteDivida(@PathVariable String id) {
		Optional<Debt> debt = this.repository.findById(id);
		if(debt.isPresent()) {
			this.repository.deleteById(id);
			return ResponseEntity.noContent().build();
		} else
			return ResponseEntity.notFound().build();
	}

}
