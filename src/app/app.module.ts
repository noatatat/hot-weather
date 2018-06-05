import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { FilterPipe } from './common/pipe/filter.pipe';
import { DataService } from './common/service/data.service';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { ScaleDirective } from './common/directive/scale.directive';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    SocialComponent,
    FilterPipe,
    ScaleDirective,
    InfoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: BASE_URL, useValue: environment.production ? environment.url.external : environment.url.local },
    DataService
  ]
})
export class AppModule { }
