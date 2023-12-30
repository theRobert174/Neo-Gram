import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject = new BehaviorSubject<string>('Default Title');
  public title$ = this.titleSubject.asObservable();

  constructor() { }

  setTitle(newTitle: string): void {
    this.titleSubject.next(newTitle);
  }
}
