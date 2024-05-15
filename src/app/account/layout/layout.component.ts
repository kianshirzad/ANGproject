import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'LayoutDashboard',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  constructor(public data: DataService) { }

  select(item: any) {
    this.routes.forEach(c=>c.selected = false)
    item.selected = true;
  }
  routes = [
    { selected: false, icon: 'home', route: '/account/dashboard', title: 'داشبورد' },
    { selected: false, icon: 'account', route: '/account/profile', title: 'اطلاعات کاربر' },
    { selected: false, icon: 'lock', route: '/account/changepassword', title: 'تعیین رمز عبور ثابت' },
    { selected: false, icon: 'basket', route: '/account/orders', title: 'سفارش ها' },
    { selected: false, icon: 'heart', route: '/account/favorites', title: 'لیست مورد علاقه' },
    { selected: false, icon: 'map', route: '/account/addressess', title: 'آدرس های شما' },
    { selected: false, icon: 'message', route: '/account/titlesindashboardLayout', title: 'تیکت ها و پیغام ها' },
    { selected: false, icon: 'dollar', route: '/account/payments', title: 'پرداخت ها و حسابداری' },
  ]
}
