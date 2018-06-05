import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appScale]'
})

export class ScaleDirective {

  constructor(private _element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this._element.nativeElement.classList.add('transform');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._element.nativeElement.classList.remove('transform');
  }
}
