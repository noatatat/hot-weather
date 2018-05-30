import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    WeatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
