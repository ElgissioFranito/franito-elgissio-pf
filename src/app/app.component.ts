import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './pages/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    NavBarComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'franito-elgissio-pf';

  ngOnInit(): void {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    const root = document.documentElement;

    // Vérifier si un thème est déjà défini dans le stockage local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme);
      return;
    }

    // Récupérer le thème préféré du système (clair ou sombre)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    console.log(root.getAttribute('data-theme'));
    
  }

  toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
  }
  
}
