import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "../services/login.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent]
})
export class LoginModule { }