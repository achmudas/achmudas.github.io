import { Directive } from '@angular/core';

@Directive({
    selector: '[var]',
    exportAs: 'var',
    standalone: false
})
export class VarDirective {
  [key: string]: any;
}