import { inject, Injectable } from '@angular/core';
import { SharedService } from './services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  sharedService = inject(SharedService);

  setDefaultTheme(): Promise<void> {
    console.log("setDefaultTheme");

    return new Promise((resolve) => {
      const root = document.documentElement;

      // Vérifier si un thème est déjà défini dans le stockage local
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        this.sharedService.theme.set(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';

        root.setAttribute('data-theme', theme);
        this.sharedService.theme.set(theme);
      }

      console.log('Thème appliqué :', root.getAttribute('data-theme'));
      resolve();
    });
  }


async initialize(): Promise < void> {
  // return this.preloadImages();
  return Promise.all([
    this.setDefaultTheme(), 
  ]).then(() => {
    console.log('Toutes les initialisations sont terminées.');
  });
}
}
