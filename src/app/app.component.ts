import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SharedService } from './services/shared.service';
import { NgClass } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    NavBarComponent,
    HeroComponent,
    NgClass,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'franito-elgissio-pf';

  sharedService = inject(SharedService);

  ngOnInit(): void {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    console.log("setDefaultTheme");

    const root = document.documentElement;

    // Vérifier si un thème est déjà défini dans le stockage local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme);

      this.sharedService.theme.set(savedTheme);

      return;
    }

    // Récupérer le thème préféré du système (clair ou sombre)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

    const defaultTheme = root.getAttribute('data-theme');

    this.sharedService.theme.set(defaultTheme ?? 'dark');

    console.log("this.sharedService.theme ", this.sharedService.theme());

  }

  toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');

    if (root.getAttribute('data-theme') === 'light') {
      this.sharedService.theme.set('light');
    } else {
      this.sharedService.theme.set('dark');
    }
    console.log("this.sharedService.theme ", this.sharedService.theme());
  }

  onMouseMove(event: MouseEvent) {
    const { currentTarget: target } = event as any;
    const rect = target?.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target?.style.setProperty('--mouse-x', `${x}px`);
    target?.style.setProperty('--mouse-y', `${y}px`);
  }

}
