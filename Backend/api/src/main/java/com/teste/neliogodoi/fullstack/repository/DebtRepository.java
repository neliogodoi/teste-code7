package com.teste.neliogodoi.fullstack.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.teste.neliogodoi.fullstack.model.Debt;

public interface  DebtRepository extends MongoRepository<Debt, String> {
	List<Debt> findDividaByIdUser(Long id);
}
