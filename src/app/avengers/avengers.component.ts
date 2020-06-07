import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ColorEvent } from 'ngx-color';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AvengersService, BrightnessMode } from './avengers.service';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.scss']
})
export class AvengersComponent implements OnInit {

  powerStatus$: Observable<string>;
  brightnessStatus$: Observable<string>;
  private hueChange$ = new Subject<ColorEvent>();

  constructor(public service: AvengersService) {
    this.powerStatus$ = this.service.getPowerStatus();
    this.brightnessStatus$ = this.service.getBrightnessStatus();
  }

  togglePower(power: string) {
    this.powerStatus$ = this.service.updatePower(power);
  }

  setBrightnessMode(mode: BrightnessMode) {
    this.brightnessStatus$ = this.service.updateBrightness(mode);
  }

  onSlide(event: ColorEvent) {
    this.hueChange$.next(event);
  }

  onResetHue() {
    this.hueChange$.next({
      color: {
        hsv: {
          h: 160,
        },
      }
    } as any);
  }

  ngOnInit() {
    this.hueChange$.pipe(
      debounceTime(1000),
      switchMap((event) => {
        return this.service.updateHue(~~(event.color.hsv.h * 255 / 359));
      }),
    ).subscribe((r) => {
      console.log(r);
    });
  }

}
