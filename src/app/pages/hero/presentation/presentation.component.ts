import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { SharedService } from '../../../services/shared.service';
// import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements AfterViewInit {
  @ViewChild('presentationElement') presentationElement!: ElementRef;

  sharedService = inject(SharedService);

  ngAfterViewInit() {
    gsap.from(this.presentationElement.nativeElement, {
      scrollTrigger: {
        trigger: this.presentationElement.nativeElement,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play reverse restart reverse',
        markers: false,
      },
      opacity: 0,
      x: 100,
    });
  }

}
