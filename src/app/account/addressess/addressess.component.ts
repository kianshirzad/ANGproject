import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './addressess.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressessComponent {
  addressess: any[] = [
    {}
  ];
}
