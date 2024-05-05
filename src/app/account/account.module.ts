import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoritsComponent } from './favorits/favorits.component';
import { AddressessComponent } from './addressess/addressess.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ChangePasswordComponent,
    OrdersComponent,
    FavoritsComponent,
    AddressessComponent,
    TicketsComponent,
    PaymentsComponent,
    ProfileComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',component:LayoutComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'changepassword', component: ChangePasswordComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'favorites', component: FavoritsComponent },
          { path: 'addressess', component: AddressessComponent },
          { path: 'payments', component: PaymentsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'tickets', component: TicketsComponent },
        ]
      },
    ])
  ]
})
export class AccountModule { }
