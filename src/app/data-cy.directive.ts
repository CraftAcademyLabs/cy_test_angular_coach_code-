import { environment } from '../environments/environment';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[data-cy]',
})
export class DataCyDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (environment.production) {
      renderer.removeAttribute(el.nativeElement, 'data-cy');
    }
  }
}
