import { NgClass } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
import gsap from 'gsap';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-contact',
  imports: [NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail = "franitorandriamanarinna@gmail.com";
  
  sharedService = inject(SharedService);
  zone = inject(NgZone);

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        document.querySelectorAll('.title, .subtitle').forEach((element) => {
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

        document.querySelectorAll('.form-section form div, .form-section .form-title').forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 80%',
              toggleActions: 'play none none reverse',
              markers: false,
              scrub: true
            },
            opacity: 0,
            x: -100,
            scale: 0.8,
            stagger: 0.2
          });
        })

        document.querySelectorAll('.info-section p, .info-section h2').forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 80%',
              toggleActions: 'play none none reverse',
              markers: false,
              scrub: true
            },
            opacity: 0,
            x: 100,
            scale: 0.8,
            stagger: 0.2
          });
        })
      }, 500);
    });
  }
  
  onMouseMove(event: MouseEvent) {
    const { currentTarget: target } = event as any;
    const rect = target?.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target?.style.setProperty('--mouse-x', `${x}px`);
    target?.style.setProperty('--mouse-y', `${y}px`);

    // let mouseX = event.pageX - target.offsetLeft;
    // let mouseY = event.pageY - target.offsetTop;

    // target.style.setProperty('--mouse-x', `${mouseX}px`);
    // target.style.setProperty('--mouse-y', `${mouseY}px`);
    // console.log(mouseX, mouseY);
    
  }
}
