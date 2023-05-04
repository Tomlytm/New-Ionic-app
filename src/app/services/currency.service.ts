import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = 'HcLsKk7tuUPQeyEnkfAkJnJia5J9Kc8MvlkfEvbd';
  private baseUrl = 'https://freecurrencyapi.net/api/v2';

  async getExchangeRate(from: string, to: string): Promise<number> {
    const url = `${this.baseUrl}/latest?apikey=${this.apiKey}&base_currency=${from}&convert_currency=${to}`;
    const response = await axios.get(url);
    console.log(response.data.data[to])

    return response.data.data[to];
  }
  async getCurrencies(from: string, to: string): Promise<string[]> {
    const url = `${this.baseUrl}/latest?apikey=${this.apiKey}&base_currency=${from}&convert_currency=${to}`;
    const response = await axios.get(url);

    const cur =Object.keys(response.data.data)
return cur;
  }
}
