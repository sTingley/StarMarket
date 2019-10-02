import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service'
import { ActivatedRoute } from '@angular/router';
import { Watchlist } from '../watchlist';
//import { WATCHLISTS } from '../mock-watchlists';

//here we could import an actual watchlist object

@Component({
  selector: 'watchlists',
  templateUrl: './watchlists.component.html'
})

export class WatchlistsComponent implements OnInit {

  lists: Watchlist[];
  selected: Watchlist;

  constructor(private route: ActivatedRoute,
    private watchlistService: WatchlistService
    //private location: Location
  ) { }

  ngOnInit() {
    this.getWatchlists();
    console.log("this.lists: " +JSON.stringify(this.lists));
  }

  getWatchlists(): void {
    //this.watchlistService.get();
    this.watchlistService.get()
      .subscribe(lists => this.lists = lists);
  }

  selectWatchlist(list) {
    this.watchlistService.select(list)
    .subscribe(selected => this.selected = selected);
  }

  createNewWatchlist(list) {
    this.watchlistService.add(list);
  }


}