import { Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-detail-about',
  imports: [],
  templateUrl: './detail-about.component.html',
  styleUrl: './detail-about.component.scss'
})
export class DetailAboutComponent {

  zone = inject(NgZone);

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        document.querySelectorAll('app-detail-about p').forEach((element) => {
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
            scale: 0.8,
            stagger: 0.2
          });
        })
      }, 500);
    });
  }

}
