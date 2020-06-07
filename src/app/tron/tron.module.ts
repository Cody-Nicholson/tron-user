import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TronComponent } from './tron.component';
import { ColorSliderModule } from 'ngx-color/slider';



@NgModule({
  declarations: [
    TronComponent
  ],
  imports: [
    CommonModule,
    ColorSliderModule,
  ]
})
export class TronModule { }
