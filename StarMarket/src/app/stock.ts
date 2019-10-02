export class Stock {
    name: string;
    ticker: string;
    price: number;
    currency: string
    price_open: number;
    day_high: number;
    day_low: number;
    annual_high: number; //52_week_high-->annual_high
    annual_low: number; //52_week_low-->annual_low
    day_change: number;
    change_pct: number;
    close_yesterday: number;
    market_cap: number;
    volume: number;
    volume_avg: number
    shares: number;
    stock_exchange_long: string;
    stock_exchange_short: string;
    timezone: string;
    timezone_name: string;
    gmt_offset: number;
    last_trade_time: string;
  }