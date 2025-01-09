import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-detail-about',
  imports: [],
  templateUrl: './detail-about.component.html',
  styleUrl: './detail-about.component.scss'
})
export class DetailAboutComponent {
  @ViewChild('detailAboutElement') detailAboutElement!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.detailAboutElement.nativeElement, {
      scrollTrigger: {
        trigger: this.detailAboutElement.nativeElement,
        start: 'top 90%',
        end: 'bottom 75%',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: true
      },
      opacity: 0,
      y: -200,
      scale: 0.8
    });
  }

}
