import {Component, Input} from '@angular/core';
import {IPlace} from '../places';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input()
  place: IPlace;

  @Input()
  url: string;

}
