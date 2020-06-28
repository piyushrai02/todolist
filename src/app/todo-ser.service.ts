import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoSerService {
  tododData = new Subject<any>()
  doneTask = new Subject<any>()
  undonetask = new Subject<any>()
  constructor() { }
}
