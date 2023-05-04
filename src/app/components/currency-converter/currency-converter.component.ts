import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  amount = 1;
  lastConversions: { from: string; to: string; amount: number }[] = [];
  currencies: string[] = [];
  exchangeRate = 0;
  newConvert = 0;
  constructor(private currencyService: CurrencyService) {}

  async ngOnInit() {
    this.currencies = await this.currencyService.getCurrencies(this.fromCurrency, this.toCurrency);

  }

  async convert() {
    this.exchangeRate = await this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency);
    const convertedAmount = this.amount * this.exchangeRate;
    this.newConvert = convertedAmount
    this.lastConversions.unshift({ from: this.fromCurrency, to: this.toCurrency, amount: this.amount });
    if (this.lastConversions.length > 3) {
      this.lastConversions.pop();
    }
    console.log(`${this.amount} ${this.fromCurrency} = ${convertedAmount} ${this.toCurrency}`);
  }

  getConvertedAmount(amount: number) {
    return (amount * this.exchangeRate).toFixed(2);
  }
}
