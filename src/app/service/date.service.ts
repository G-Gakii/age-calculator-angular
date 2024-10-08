import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  day = signal(1);
  month = signal(1);
  year = signal(1900);

  constructor() {}
}
