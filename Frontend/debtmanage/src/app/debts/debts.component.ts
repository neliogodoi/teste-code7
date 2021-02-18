import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Debt } from './debt';
import { DebtService } from '../services/debt.service';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-debts',
	templateUrl: './debts.component.html',
	styleUrls: ['./debts.component.sass']
})
export class DebtsComponent implements OnInit {

	debts: Debt[];
	form: FormGroup;
	selectedUser: number;
	
	@Input() debt: Debt;
	@Input() users;
	@Output() evento = new EventEmitter();

	constructor(
		private debtService: DebtService,
		private formBuilder: FormBuilder) {
		this.debt = new Debt();
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			user: ['', Validators.required],
			motivo: ['', Validators.required],
			valor: ['', [Validators.required, Validators.min(0.01)]],
			data: ['', Validators.required],
		});
	}

	onSubmit(){
		if (this.form.valid) {
			try {
				this.debt.idUser = parseInt(this.form.get('user').value) || this.form.get('user').value;
				this.debt.motivo = this.form.get('motivo').value;
				this.debt.valor = this.form.get('valor').value;
				this.debt.data = new Date(this.form.get('data').value).getTime()/1000;
				this.saveDebt(this.debt);
			} catch (e){}
		}
	}

	dataParse(unix){
		if(unix !== undefined)
			return new Date(unix*1000);
	}

	findDebt(id: string){
		this.debtService.findDebt(id).subscribe( debt => {
			this.debt = debt;
		});
		this.evento.emit(Object(this.debt));
	}

	saveDebt(debt: Debt){
		this.debtService.saveDebt(debt).subscribe( debtData => {
			this.evento.emit(Object(this.debt));
		}, error => {
			alert("confira os dados inseridos!");
		});
	}

	deleteDebt(){
		this.debtService.deleteDebt(this.debt.id).subscribe( del =>{
			this.evento.emit(Object(this.debt));
		});
	}

	cancelar(){
		this.evento.emit(Object(this.debt));
	}
}
