import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {IPlace} from '../places';
import {BASE_URL} from '../config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input()
  public current: IPlace;

  @Input()
  public places: IPlace[];

  @Output()
  selectedPlace: EventEmitter<IPlace> = new EventEmitter();

  @Output()
  filterState: EventEmitter<string> = new EventEmitter();

  constructor(
    @Inject(BASE_URL) public url: string
  ) {}

  public onSelect(select) {
    this.selectedPlace.emit(select);
  }

  public onFilterClick(e) {
    e.preventDefault();
    const selectedfilter: string = e.target.id;

    /* Как условие привести к булеан? */
    if (selectedfilter) {
      this.filterState.emit(selectedfilter);
    }
  }


}
