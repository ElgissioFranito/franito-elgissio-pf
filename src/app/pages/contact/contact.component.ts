import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-contact',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  mail = "franitorandriamanarinna@gmail.com";

  sharedService = inject(SharedService);
  zone = inject(NgZone);
  fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    message: ['', Validators.required]
  });

  isSending = false;

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
  }

  async sendMail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const formValues = this.contactForm.value;
    const now = new Date();

    const templateParams = {
      'first-name': formValues.firstName,
      'last-name': formValues.lastName,
      'email-adress': formValues.email,
      'phone-number': formValues.mobile,
      'message': formValues.message,
      'date': now.toLocaleDateString(),
      'time': now.toLocaleTimeString()
    };

    try {
      await emailjs.send('service_lujamcl', 'template_z1bkil4', templateParams, 'qClO077Vv8P0L7mu8');
      this.sharedService.showNotification('Message sent successfully!', 'success');
      this.contactForm.reset();
    } catch (error) {
      console.error('FAILED...', error);
      this.sharedService.showNotification('Failed to send message. Please try again later.', 'error');
    } finally {
      this.isSending = false;
    }
  }

}
