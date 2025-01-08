import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  theme = signal<string>('dark');

  constructor() { }
}
