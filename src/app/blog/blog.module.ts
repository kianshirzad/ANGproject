import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', component: HomeComponent },
          { path: 'content/:id/:title', component: ContentComponent },
        ]
      },
    ])
  ]
})
export class BlogModule { }
