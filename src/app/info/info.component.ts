import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPlace} from '../places';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input()
  public current: IPlace;

  @Input()
  public places: IPlace[];

  @Output()
  selectedPlace: EventEmitter<IPlace> = new EventEmitter();

  @Output()
  filterState: EventEmitter<string> = new EventEmitter();

  onSelect(select) {
    this.selectedPlace.emit(select);
  }

  onFilterClick(e) {
    const selectedfilter: string = e.target.id;
    /* Как условие привести к булеан? */
    if (selectedfilter) {
      this.filterState.emit(selectedfilter);
    }
  }


}
