import { animate, style, transition, trigger } from '@angular/animations';

export const fadeStateTrigger = trigger('fadeState', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('600ms', style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate('600ms', style({ opacity: 0 }))
  ])
]);
