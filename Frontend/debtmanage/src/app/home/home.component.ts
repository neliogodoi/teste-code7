import { Component, OnInit } from '@angular/core';
import { Debt } from '../debts/debt';
import { DebtService } from '../services/debt.service';
import { UsersService } from '../services/users.service';

import * as moment from 'moment';
import { DebtsComponent } from '../debts/debts.component';
import { Debtor } from '../utils/debtor';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	mostrarAppDebts = false;
	mostrarListaDebts = false;
	mostrarNavside = false;
	mostrarBotaoMenu = true;

	devedores: Debtor[];
	devedor: Debtor;
	dividas: Debt[];
	divida: Debt;
	usuarios: any[];
	usuario: any;

	constructor(
		private dividaService: DebtService,
		private usuarioService: UsersService
	) {
		if(window.screen.width >= 720){
			this.mostrarBotaoMenu = false;
			this.mostrarNavside = true
		}
	}

	ngOnInit() {
		moment.locale('pt-br');
		this.buscarUsuarios();
	}

	buscarUsuarios() {
		this.usuarioService.findAllUsers().subscribe(
			users => {
				this.usuarios = users;
				this.listarDevedores();
			}
		);
	}

	async listarDevedores() {
		this.devedores = [];
		for (let user of this.usuarios) {
			await this.dividaService.findDebtsByUser(user.id).subscribe(debts => {
				if (debts.length > 0) {
					let devedor = new Debtor();
					devedor.user = user.id;
					devedor.nome = user.name;
					devedor.debtValue = 0;
					devedor.debts = [];
					for (let debt of debts) {
						if(debt.valor !== null){
							devedor.debtValue += debt.valor;
							devedor.debts.push(debt.id);
						}
					}
					this.devedores.push(devedor);
				}
			});
		}
	}

	async listarDividasDeUsuario(idUser) {
		this.mostrarListaDebts = true;
		this.mostrarAppDebts = false;
		if(this.mostrarNavside)
			this.toogleNavside()
		this.dividas = [];
		for (let devedor of this.devedores) {
			if(devedor.user === idUser){
				this.devedor = devedor;
				for(let id of devedor.debts){
					await this.dividaService.findDebt(id).subscribe(debtData => {
						this.dividas.push(debtData);
					});
				}
				break;
			}
		}
	}

	async onChange(event: Debt){
		await this.listarDevedores();
		setTimeout( () => {
			this.listarDividasDeUsuario(event.idUser);
		}, 500);
		this.mostrarAppDebts = !this.mostrarAppDebts;
	}

	setMostrarAppDebts(){
		this.mostrarAppDebts = true;
		this.mostrarListaDebts = false;
	}

	setMostrarListaDebts(){
		this.mostrarAppDebts = false;
		this.mostrarListaDebts = true;
	}

	novaDivida(){
		this.divida = new Debt();
		this.setMostrarAppDebts();
	}

	parseData(date){
		return moment.unix(parseInt(date)).format('l');
	}

	verInformacoesDeDivida(id){
		this.dividaService.findDebt(id).subscribe( debt => {
			this.divida = debt;
			this.setMostrarAppDebts();
		});
	}

	toogleNavside(){
		if(window.screen.width >= 720){
			this.mostrarNavside = true;
		} else{
			this.mostrarNavside = !this.mostrarNavside;
		}
	}

}
