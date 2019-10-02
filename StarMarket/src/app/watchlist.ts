export class Watchlist {
    name: string;
    currentView: number;
    stocks: Object[] //TODO: Make this stock type
    delete: boolean; //this will be checked before we delete
}