import { Pipe, PipeTransform } from '@angular/core';
import {IPlace} from '../../places';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(places: IPlace[], filteredType: string): IPlace[] {
    if (filteredType === 'all' || filteredType.length === 0) {
      return places;
    }
    return places.filter(place => place.type === filteredType );
  }
}
