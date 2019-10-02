import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Watchlist } from './watchlist';
import { WATCHLISTS } from './mock-watchlists';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http: HttpClient) { }

  //lists: Watchlist[] = WATCHLISTS;

  selectedListName: string = '';

  createNew: boolean = false;

  //this is set in the HTML
  newWatchlist: string = '';

  get(): Observable<Watchlist[]> {
    console.log("mock watchlists: " + of(WATCHLISTS));
    return of(WATCHLISTS);
  }

  add(category: Watchlist) {
    console.log("adding " + category);
    //TO-DO: call this once I have the new watchlist built (use a form, 'onSubmit')
    //TO-DO: add the name and populate the stocks with the form
    //WATCHLISTS.push(category);
  }

  display(value: string) {
    console.log("got value in display function: " + value);
    if (value == "new") { //need to add a check that value is in lists
      console.log("got create.");
      this.selectedListName = '';

      //TO-DO: use this value as a check but not to render the html itself?
      this.createNew = true;
      return;
    }
    this.createNew = false;
    this.selectedListName = value;
    WATCHLISTS.forEach(list => {
      if(list.name == value){
        console.log("found " + value + " watchlist.")

        //this.select(value);
      }
    })
  }

  select(name: string): Observable<Watchlist> {

    console.log("got value in display function: " + name);
    if (name == "new" && name.length > 0) { //need to add a check that value is in lists
      
      this.createNew = true; //TO-DO: use this value as a check but not to render the html itself?
      this.selectedListName = name; //TO-DO: check if I need this?

      return of(WATCHLISTS.find(watchlist => watchlist.name === name));
    }
  }


}
