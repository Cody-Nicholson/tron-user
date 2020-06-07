import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengersComponent } from './avengers.component';
import { ColorSliderModule } from 'ngx-color/slider';



@NgModule({
  declarations: [AvengersComponent],
  imports: [
    CommonModule,
    ColorSliderModule,
  ]
})
export class AvengersModule { }
