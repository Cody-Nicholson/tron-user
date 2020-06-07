import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TronService {

  baseUrl = 'http://192.168.1.101:8266';

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

  updatePower(status: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/power`, status, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

  updateHue(hue: number){
    return this.http.post(`${this.baseUrl}/color/hue`, hue, this.headerOptions);
  }

  updateBrightness(mode: BrightnessMode){
    return this.http.post(`${this.baseUrl}/brightness`, mode, this.headerOptions)
      .pipe(
        pluck('body'),
      );
  }

}

export type BrightnessMode = 'low' | 'normal';
