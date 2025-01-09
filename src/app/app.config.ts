import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppInitService } from './app-init.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializerFactory,
    //   deps: [AppInitService],
    //   multi: true,
    // },
    provideAppInitializer(() => inject(AppInitService).initialize()),
  ]
};
