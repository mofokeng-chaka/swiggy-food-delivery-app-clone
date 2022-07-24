import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopPicksComponent } from './components/top-picks/top-picks.component';
import { OffersComponent } from './components/offers/offers.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { PopularComponent } from './components/popular/popular.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoCardSmallComponent } from './shared/components/info-card-small/info-card-small.component';
import { RestaurantInfoComponent } from './shared/components/restaurant-info/restaurant-info.component';
import { HomeComponent } from './components/home/home.component';
import { PageMissingComponent } from './shared/components/page-missing/page-missing.component';
import { MapComponent } from './components/map/map.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    BannerComponent,
    TopPicksComponent,
    OffersComponent,
    CouponsComponent,
    SpotlightComponent,
    PopularComponent,
    NavbarComponent,
    InfoCardSmallComponent,
    RestaurantInfoComponent,
    HomeComponent,
    PageMissingComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GooglePlaceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
