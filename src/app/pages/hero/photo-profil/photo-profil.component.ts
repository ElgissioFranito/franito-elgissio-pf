import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import gsap from 'gsap';

@Component({
  selector: 'app-photo-profil',
  imports: [NgOptimizedImage],
  templateUrl: './photo-profil.component.html',
  styleUrl: './photo-profil.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoProfilComponent {
  @ViewChild('profilPictureElement') profilPictureElement!: ElementRef;
  sharedService = inject(SharedService);

  zone = inject(NgZone);

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      gsap.from(this.profilPictureElement.nativeElement, {
        scrollTrigger: {
          trigger: this.profilPictureElement.nativeElement,
          start: 'top 75%',
          end: 'bottom 40%',
          toggleActions: 'play reverse restart reverse',
          markers: false,
        },
        opacity: 0,
        x: -100,
      });
    });
  }
}
