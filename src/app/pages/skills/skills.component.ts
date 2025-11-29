import { ChangeDetectionStrategy, Component, inject, NgZone } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  // @ViewChild('detailAboutElement') detailAboutElement!: ElementRef;
  zone = inject(NgZone);

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        document.querySelectorAll('.category').forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 75%',
              toggleActions: 'play none none reverse',
              markers: false,
              scrub: true
            },
            opacity: 0,
            x: -100
          });
        })
        document.querySelectorAll('.skill-item').forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 75%',
              toggleActions: 'play none none reverse',
              markers: false,
              scrub: true
            },
            opacity: 0,
            y: 100,
            scale: 0.8
          });
        })
      }, 500);
    })
  }
}
