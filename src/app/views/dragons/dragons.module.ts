import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsComponent } from './dragons.component';

@NgModule({
  declarations: [ListComponent, FormComponent, DragonsComponent],
  imports: [
    CommonModule,
    DragonsRoutingModule
  ]
})
export class DragonsModule { }
