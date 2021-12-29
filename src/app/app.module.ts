import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CountdownModule } from 'ngx-countdown';
import { StatisticsComponent } from './statistics/statistics.component';
import { BattlePassRewardsComponent } from './battle-pass-rewards/battle-pass-rewards.component';
import { DailyShopComponent } from './daily-shop/daily-shop.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    StatisticsComponent,
    DailyShopComponent,
    MapComponent,
    HeaderComponent,
    BattlePassRewardsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
