import {Component, Input} from '@angular/core';
import {ISocial} from '../places';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent {
  @Input()
  public social: ISocial;
}
