import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAlertDirective } from './input-alert.directive';


@NgModule({
  declarations: [InputAlertDirective],
  imports: [
    CommonModule
  ],
  exports: [InputAlertDirective]
})
export class DirectivesModule { }
