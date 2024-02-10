import {animate, style, transition, trigger} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('150ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('150ms', style({ opacity: 0 })),
  ]),
]);

export const pageTransition = trigger('pageTransition', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('100ms', style({ opacity: 0 })),
  ]),
]);

export const slideDown = trigger('slideDown', [
  transition(':enter', [
    style({opacity: 0, maxHeight: '0'}),
    animate('300ms ease-in', style({opacity: 1, maxHeight: '1000px'})),
  ]),
]);
