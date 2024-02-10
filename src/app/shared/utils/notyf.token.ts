import {InjectionToken} from '@angular/core';
import {Notyf} from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
    return new Notyf({
      position: {x: 'center', y: 'bottom'},
      duration: 10000,
      dismissible: true,
    });
}
