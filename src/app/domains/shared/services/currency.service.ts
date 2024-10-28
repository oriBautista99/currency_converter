import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';
import * as currenciesData from '../../../../assets/currencies.json';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = 'https://v6.exchangerate-api.com/v6/d29217376b038e0ebbbcb260/latest/';
  private http = inject(HttpClient);

  constructor() { }

  getCurrencies() {
    return (currenciesData as any).currencies;
  }

  getExchangeRate(base: string, target: string) {
    return this.http.get(`${this.url+base}`);
  }

}
