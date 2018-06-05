import {Component, Inject, Input} from '@angular/core';
import {ISocial} from '../places';
import {BASE_URL} from '../config';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent {
  @Input()
  public social: ISocial;

  public constructor(
    @Inject(BASE_URL) public url: string
  ) {}
}
