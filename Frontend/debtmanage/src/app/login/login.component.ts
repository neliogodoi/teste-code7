import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	isNotAuth: boolean;
	form: FormGroup;
	private returnUrl;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private loginService: LoginService
	) { }

	async ngOnInit() {

		this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

		this.form = this.formBuilder.group({
			username: ['', Validators.email],
			password: ['', Validators.required]
		});

		this.loginService.isAuthenticated().subscribe( auth => {
			console.log(auth);
			this.router.navigate([this.returnUrl]);
		});
	}

	async onSubmit() {
		this.isNotAuth = true;
		if (this.form.valid) {
			try {
				const username = this.form.get('username').value;
				const password = this.form.get('password').value;
				await (await this.loginService.login(username, password)).subscribe( token => {
					window.localStorage.setItem("token", token);
					this.isNotAuth = false;
					this.router.navigate([this.returnUrl]);
				});
			} catch (err) {
				this.isNotAuth = false;
			}
		}
	}
}
