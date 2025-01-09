import { AfterViewInit, Component, Inject, inject, OnInit } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SharedService } from './services/shared.service';
import { NgClass } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SkillsComponent } from './pages/skills/skills.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    NavBarComponent,
    NgClass,
    HeroComponent,
    AboutComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'franito-elgissio-pf';
  isLoading = true;

  sharedService = inject(SharedService);

  ngAfterViewInit() {
    // Configuration ScrollTrigger
    ScrollTrigger.refresh();
  }

  async ngOnInit(): Promise<void> {
    await this.sharedService.preloadImages([
      'hero/profil-light.png',
      'hero/profil-dark.png',
      'about/PORTRAIT.png'
    ]);

    this.isLoading = false;
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
