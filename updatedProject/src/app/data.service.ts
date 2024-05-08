import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Svgs } from './svgs.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  svgs: { [key: string]: SafeHtml } = {};
  constructor(_sanitizer: DomSanitizer) {
    Object.keys(Svgs).forEach((key, index) => {
      console.log(`${key} has index ${index}`)
      this.svgs[key] = _sanitizer.bypassSecurityTrustHtml(Svgs[key]);
    })
  }

}
