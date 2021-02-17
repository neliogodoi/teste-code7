import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtsComponent } from './debts.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { DebtService } from '../services/debt.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    DebtsComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    CommonModule
  ],
  providers: [
    DebtService,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  exports: [
    DebtsComponent
  ],
  bootstrap: [ DebtsComponent ]
})
export class DebtsModule { }
