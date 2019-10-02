import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
//import { STOCKS } from '../mock-stocks';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit {
  stocks: Stock[];
  // selectedStock: Stock;

  //   onSelect(stock: Stock): void {
  //     this.selectedStock = stock;
  //   }

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }
}
