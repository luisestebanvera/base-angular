import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ROUTES } from '../../core/constants/routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: ROUTES
      }
    ])
  ],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }
