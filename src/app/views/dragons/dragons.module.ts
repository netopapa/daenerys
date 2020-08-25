import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsComponent } from './dragons.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [ListComponent, FormComponent, DragonsComponent],
  imports: [
    CommonModule,
    DragonsRoutingModule,
    FormsModule,
    DirectivesModule
  ]
})
export class DragonsModule { }
