
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './components/topic/topic.component';
import { Dashboard6Component } from './components/dashboard6/dashboard6.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Blog3Component } from './components/blog3/blog3.component';
import { AdressComponent } from './components/adress/adress.component';
import { ProductComponent } from './components/product-single-page/product-single-page.component';
import { Blog1Component } from './components/blog1/blog1.component';
import { ProductaListingComponent } from './components/producta-listing/producta-listing.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TicketsComponent } from './account/tickets/tickets.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, CategoryComponent, ProductaListingComponent, ProductComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'account', loadChildren: () => import('./account/account.module').then(c => c.AccountModule) },

        
        { path: 'category', component: CategoryComponent },
        { path: 'listing', component: ProductaListingComponent },
        { path: 'product/:id/:title', component: ProductComponent },


        { path: 'tickets', component: TicketsComponent },

        { path: 'adressDropshipping', component: AdressComponent },
        { path: 'blog1', component: Blog1Component },
        { path: 'blog3', component: Blog3Component },
        { path: 'contactUs', component: ContactUsComponent },
        { path: 'Dashboard6', component: Dashboard6Component },
        { path: 'Topics', component: TopicComponent },
      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
