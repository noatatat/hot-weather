import { Injectable } from '@angular/core';
import { data, IPlace } from '../../places';
import { Observable, of} from 'rxjs';

@Injectable()

export class DataService {
  private _data: IPlace[];

  public constructor() {
    this._data = data;
  }

  public getData(): Observable<IPlace[]> {
    return of(this._data);
  }
}
