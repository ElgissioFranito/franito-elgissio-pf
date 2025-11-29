import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-image-about',
  imports: [NgOptimizedImage],
  templateUrl: './image-about.component.html',
  styleUrl: './image-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageAboutComponent {
  @ViewChild('photoAboutElement') photoAboutElement!: ElementRef;

  zone = inject(NgZone);
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
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
      }, 500)
    })
  }
}
