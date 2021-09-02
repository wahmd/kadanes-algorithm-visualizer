import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private i: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}

  getI = () => this.i;
  setI = (i: number) => {
    this.i.next(i);
  };
}
