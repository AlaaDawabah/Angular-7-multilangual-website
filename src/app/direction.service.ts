import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  dir = new BehaviorSubject([]);
  dirObs = this.dir.asObservable();

  constructor() { }

  updateDirection(dir) {
    this.dir.next(dir);
  }
}
