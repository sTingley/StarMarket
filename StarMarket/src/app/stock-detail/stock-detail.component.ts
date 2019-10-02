import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Input() stock: Stock;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) { }

  ngOnInit(): void {
    //this.getStock();
    this.getStockAPI();
    console.log("in ngOnInit: " + this.stock);
  }

  //this was added after we added the router / location / route
  getStock(): void {
    const ticker = this.route.snapshot.paramMap.get('id');
    console.log("ticker is: " + ticker);
    this.stockService.getStock(ticker)
      .subscribe(stock => this.stock = stock);
  }

  getStockAPI(): void {

    const ticker = this.route.snapshot.paramMap.get('id');
    console.log("ticker in API function is: " + ticker);
    this.stockService.getStockAPI(ticker)
      .subscribe(stock => {
        this.stock = stock;
        console.log("got stock: " + JSON.stringify(this.stock));
        this.parseStock(this.stock);
      })
  }

  parseStock(obj): any {
    let check = obj.hasOwnProperty("data");
    console.log("check is:  " + check)
    if (check) {
      console.log("obj.data: " + JSON.stringify(obj.data[0]))
      return this.stock = obj.data[0];
    } else return;
  }

  goBack(): void {
    this.location.back();
  }

}
