import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector : 'LayoutDashboard',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
constructor(public data:DataService){}
}
