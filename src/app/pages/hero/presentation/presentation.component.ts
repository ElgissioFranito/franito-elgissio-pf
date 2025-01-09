import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements AfterViewInit {
  @ViewChild('presentationElement') presentationElement!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.presentationElement.nativeElement, {
      scrollTrigger: {
        trigger: this.presentationElement.nativeElement,
        start: 'top 75%',
        end: 'bottom 60%',
        toggleActions: 'play reverse restart reverse',
        markers: false,
      },
      opacity: 0,
      x: 100,
    });
  }

}
