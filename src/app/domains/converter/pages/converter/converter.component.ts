import { Component, inject, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ResultComponent } from '../../../shared/components/result/result.component';
import { CurrencyService } from '../../../shared/services/currency.service';
import { Currency } from '../../../shared/models/currency.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ResultComponent,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AsyncPipe
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

  private currencySvc = inject(CurrencyService);

  fromCurrency = new FormControl('');
  toCurrency = new FormControl('');
  filteredcurrenciesFrom: Observable<any[]>;
  filteredcurrenciesTo: Observable<any[]>;
  currencies : Currency[] = [];

  constructor(){
    this.filteredcurrenciesFrom = new Observable<any[]>();
    this.filteredcurrenciesTo = new Observable<any[]>();
  }

  ngOnInit(){
    this.currencies = this.currencySvc.getCurrencies();
    this.filteredcurrenciesFrom = this.fromCurrency.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredcurrenciesTo = this.toCurrency.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.currencies.filter(option => option.code.toLowerCase().includes(filterValue));
  }

}
