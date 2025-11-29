import { AfterViewInit, ChangeDetectionStrategy, Component, computed, inject, NgZone, OnInit, signal } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SharedService } from './services/shared.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailProjectComponent } from "./pages/projects/detail-project/detail-project.component";
import { zoomAnimation } from './animation/animations';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    NgClass,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    DetailProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [zoomAnimation], // Ajout de l'animation
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'franito-elgissio-pf';
  isLoading = signal(true);
  idProject = signal(0);

  sharedService = inject(SharedService);
  zone = inject(NgZone);

  themeCheck = computed(() => {
    if (this.sharedService.theme() === 'dark') {
      return true;
    } else {
      return false;
    }
  });


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

    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        this.isLoading.set(false);
      });
    }, 1500);

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

  onCloseBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.idProject.set(0);
    }
  }

}
