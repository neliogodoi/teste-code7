package com.teste.neliogodoi.fullstack.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "divida")
public class Debt {
	
	@Id
	private String id;
	
	@Field("id_user")
	private long idUser;
	
	@Field("motivo")
	private String motivo;
	
	@Field("valor")
	private Double valor;
	
	@Field("data")
	private long data;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getIdUser() {
		return idUser;
	}

	public void setIdUser(long idUser) {
		this.idUser = idUser;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public long getData() {
		return data;
	}

	public void setData(long data) {
		this.data = data;
	}
		
}
