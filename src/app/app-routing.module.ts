import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BattlePassRewardsComponent } from './battle-pass-rewards/battle-pass-rewards.component';
import { DailyShopComponent } from './daily-shop/daily-shop.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
   { path: 'daily-shop', component: DailyShopComponent },
   { path: 'Statistics', component: StatisticsComponent },
   { path: 'BattlePassRewards', component: BattlePassRewardsComponent },
   { path: 'map', component: MapComponent },
   { path: 'accueil', component: AccueilComponent },
   { path: '', component: AccueilComponent },
   { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
