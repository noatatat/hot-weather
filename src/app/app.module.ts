import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { FilterPipe } from './common/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    WeatherComponent,
    SocialComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
