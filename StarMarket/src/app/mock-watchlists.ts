import { Watchlist } from './watchlist';

export const WATCHLISTS: Watchlist[] = [
    {
        name: "Big Tech",
        currentView: 0,
        stocks: [
            { name: "Apple Inc.", ticker: "AAPL", price: 201 },
            { name: "Microsoft Corporation", ticker: "MSFT", price: 135 },
            { name: "Facebook Inc", ticker: "FB", price: 120 }
        ],
        delete: false
    },

    {
        name: "Commodities",
        currentView: 0,
        stocks: [
            { name: "Goldmoney Inc.", ticker: "XAUMF", price: 1.65 },
            { name: "Northern Dynasty Minerals Ltd.", ticker: "NAK", price: .63 },
            { name: "First Majestic Silver Corp.", ticker: "AG", price: 11.10 }
        ],
        delete: false
    },

    {
        name: "Holdings",
        currentView: 0,
        stocks: [
            { name: "Aurora Cannabis", ticker: "ACB", price: 5.85 },
            { name: "Northern Dynasty Minerals Ltd.", ticker: "NAK", price: .63 },
            { name: "Overstock Inc", ticker: "OSTK", price: 16.23 },
            { name: "Tailored Brands", ticker: "TLRD", price: 5.85 }
        ],
        delete: false
    }

]