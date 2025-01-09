import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  theme = signal<string>('dark');

  preloadImages(urls: string[]): Promise<void[]> {
    const promises = urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
        })
    );
    return Promise.all(promises);
  }

}
