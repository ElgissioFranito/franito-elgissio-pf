import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
.then(() => {
  const loader = document.querySelector('.loader');
  const appRoot = document.querySelector('app-root') as HTMLElement;
  if (loader && appRoot) {
    console.log("remove loader && display appRoot");
    loader.remove(); // Supprime le loader
    appRoot.style.display = 'block'; // Affiche l'application
  }
})
  .catch((err) => console.error(err));
