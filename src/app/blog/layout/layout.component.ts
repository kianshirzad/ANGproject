import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

}
