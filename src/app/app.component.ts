import {Component, OnInit} from '@angular/core';
import {IPlace} from './places';
import {DataService} from './common/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public places: IPlace[];
  public currentPlace: IPlace;
  public filterState = '';

  public constructor(public dataServise: DataService) { }

  public ngOnInit() {
    this.dataServise.getData()
      .subscribe(places => this.places = places);
    this.currentPlace = this.places[0];
  }

  public setCurrent(select: IPlace) {
    this.currentPlace = select;
  }

  public setFilter(placeType: string) {
    this.filterState = placeType;
    if (placeType === 'all') {
      this.currentPlace = this.places[0];
    } else {
      this.currentPlace = this.places.find(place => place.type === this.filterState);
    }
  }
}
