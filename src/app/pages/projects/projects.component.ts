import { Component, inject, NgZone } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  zone = inject(NgZone);

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((element) => {
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
            y: 100,
            scale: 0.8
          });
        })
      }, 500);
    })
  }

  onMouseMove(event: MouseEvent) {
    const { currentTarget: target } = event as any;
    // const rect = target?.getBoundingClientRect(),
    //   x = event.clientX - rect.left,
    //   y = event.clientY - rect.top;

    // target?.style.setProperty('--mouse-x', `${x}px`);
    // target?.style.setProperty('--mouse-y', `${y}px`);

    let mouseX = event.pageX - target.offsetLeft;
    let mouseY = event.pageY - target.offsetTop;

    target.style.setProperty('--mouse-x', `${mouseX}px`);
    target.style.setProperty('--mouse-y', `${mouseY}px`);
  }
}
