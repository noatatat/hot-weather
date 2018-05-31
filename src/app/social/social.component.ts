import {Component, Input, OnInit} from '@angular/core';
import {ISocial} from '../places';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input()
  public social: ISocial;

  constructor() { }

  ngOnInit() {
    console.log(this.social);
  }

}
