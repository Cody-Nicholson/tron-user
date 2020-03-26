import { Component, OnInit } from '@angular/core';
import { BrightnessMode, TronService } from './tron.service';
import { Observable, Subject } from 'rxjs';
import { ColorEvent } from 'ngx-color';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tron-user';
  powerStatus$: Observable<string>;
  private hueChange$ = new Subject<ColorEvent>();

  constructor(public tron: TronService) {
    this.powerStatus$ = this.tron.getPowerStatus();
  }

  togglePower(power: string) {
    this.tron.updatePower(power).subscribe(() => {

    });
  }

  setBrightnessMode(mode: BrightnessMode) {
    this.tron.updateBrightness(mode).subscribe(() => {

    });
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
        return this.tron.updateHue(~~(event.color.hsv.h * 255 / 359));
      }),
    ).subscribe((r) => {
      console.log(r);
    });
  }


}
