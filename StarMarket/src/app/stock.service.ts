import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from './stock';
import { STOCKS } from './mock-stocks';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  baseUrl: string = `https://api.worldtradingdata.com/api/v1/stock?symbol=`;
  //NOTE: if you have multiple stocks need comma inbetween
  keyString: string = '&api_token=1DszeBLwzXJ4KBUXuAsJtXSguTLOQL3gLTxdfPJubK6kyraU2hVDvMCf7Rn5';

  //https://api.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=1DszeBLwzXJ4KBUXuAsJtXSguTLOQL3gLTxdfPJubK6kyraU2hVDvMCf7Rn5


  getStockAPI(ticker): Observable<Stock> {
    this.messageService.add('Getting stock ' + ticker);
    //console.log("url: " + this.baseUrl + ticker + this.keyString);
    return this.http.get<any>(this.baseUrl + ticker + this.keyString).pipe(
        tap(_ => this.log(`fetched ticker id=${ticker}`)),
        //map(x=>x+1),
        catchError(this.handleError<Stock>(`getStock id=${ticker}`))
    )}

  getStocks(): Observable<Stock[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('StockService: fetched stocks');
    // Use RxJS of method to return an array as an Observable<stock[]>
    console.log("get Stocks returns: " + of(STOCKS));
    return of(STOCKS);
  }

  //after adding in the route we added this method to the service
  getStock(ticker: string): Observable<Stock> {
    // TODO: send the message _after_ fetching the stock
    this.messageService.add(`StockService: fetched stock ticker=${ticker}`);
    return of(STOCKS.find(stock => stock.ticker === ticker));
  }

  // /** GET hero by id. Will 404 if id not found */
  // getStockHttp(id: number): Observable<Stock> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Stock>(url);
  // }

  // .pipe(
  //   tap(_ => this.log(`fetched hero id=${id}`)),
  //   catchError(this.handleError<Hero>(`getHero id=${id}`))
  // );

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StockService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };


  }







}
