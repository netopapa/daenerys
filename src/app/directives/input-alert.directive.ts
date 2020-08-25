import { Directive, ElementRef, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

export interface InputAlertBody {
  value: any;
  field: NgModel;
}

@Directive({
  selector: '[appInputAlert]'
})
export class InputAlertDirective {

  private element: HTMLDivElement;

  constructor(
    element: ElementRef,
  ) {
    this.element = element.nativeElement;
  }

  // let the magic happens
  @Input() set appInputAlert(e: InputAlertBody) {
    if (e.field.errors?.required && e.field.dirty) {
      const alertText: HTMLSpanElement = document.createElement('span');
      alertText.classList.add('text-alert');
      alertText.innerText = e.field.name + ' is required!';

      this.element.append(alertText);
    } else {
      this.element.querySelector('.text-alert')?.remove();
    }
  }

}
