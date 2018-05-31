import {Component, OnInit} from '@angular/core';
import {IPlace, places$} from './places';
import {Observable} from 'rxjs';
import {FilterPipe} from './common/pipe/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public places: IPlace[];
  public currentPlace: IPlace;
  public filterState = '';

  ngOnInit() {
    places$.subscribe(places => this.places = places);
    this.currentPlace = this.places[0];
  }

  setCurrent(select: IPlace) {
    this.currentPlace = select;
  }

  setFilter(placeType: string) {
    this.filterState = placeType;
    if (placeType === 'all') {
      this.currentPlace = this.places[0];
    } else {
      this.currentPlace = this.places.find(place => place.type === this.filterState);
    }
  }
}
