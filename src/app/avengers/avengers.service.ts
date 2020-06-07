import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  baseUrl = 'http://192.168.2.158';
  //baseUrl = 'http://192.168.1.102:8266';

  headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  headerOptions: { observe: 'response', responseType: 'text', headers } = {
    headers: this.headers,
    observe: 'response',
    responseType: 'text'
  };

  constructor(public http: HttpClient) {

  }

  getPowerStatus(): Observable<string> {
    return this.http.get(`${this.baseUrl}/power`, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

  getBrightnessStatus(): Observable<string> {
    return this.http.get(`${this.baseUrl}/brightness`, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

  updatePower(status: string) {
    return this.http.post(`${this.baseUrl}/power`, status, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

  updateHue(hue: number) {
    return this.http.post(`${this.baseUrl}/color/hue`, hue, this.headerOptions);
  }

  updateBrightness(mode: BrightnessMode) {
    return this.http.post(`${this.baseUrl}/brightness`, mode, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

}

export type BrightnessMode = 'low' | 'normal';
