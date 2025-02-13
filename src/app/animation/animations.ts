import { trigger, state, style, transition, animate } from '@angular/animations';

export const zoomAnimation = trigger('zoomIn', [
  state('void', style({ transform: 'scale(0)', opacity: 0 })), // État initial
  state('*', style({ transform: 'scale(1)', opacity: 1 })),    // État final
  transition('void => *', [
    animate('300ms ease-out'), // Animation d'apparition
  ]),
  transition('* => void', [
    animate('300ms ease-in', style({ transform: 'scale(0)', opacity: 0 })), // Animation de disparition
  ]),
]);
