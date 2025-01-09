import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-image-about',
  imports: [],
  templateUrl: './image-about.component.html',
  styleUrl: './image-about.component.scss'
})
export class ImageAboutComponent {
  @ViewChild('photoAboutElement') photoAboutElement!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.photoAboutElement.nativeElement, {
      scrollTrigger: {
        trigger: this.photoAboutElement.nativeElement,
        start: 'top 80%',
        end: 'bottom 75%',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: true
      },
      opacity: 0,
      x: 200,
      rotate: 45,
      scale: 0.5
    });
  }
}
