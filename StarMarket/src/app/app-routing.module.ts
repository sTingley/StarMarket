import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StockDetailComponent }  from './stock-detail/stock-detail.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';

const routes: Routes = [
  { path: 'stocks', component: StocksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: StockDetailComponent },
  { path: 'watchlists', component: WatchlistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }