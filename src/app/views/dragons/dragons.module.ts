import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DragonsRoutingModule } from './dragons-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    DragonsRoutingModule
  ]
})
export class DragonsModule { }
