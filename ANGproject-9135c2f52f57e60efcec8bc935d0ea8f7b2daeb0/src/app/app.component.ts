import { Component, ViewEncapsulation } from '@angular/core';
import { Shared } from './shared';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends Shared {
  constructor(data: DataService) {
    super(data)
  }

  title = 'ANGproject';
}
