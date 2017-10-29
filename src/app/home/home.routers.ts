import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {AbstractComponent} from './abstract/abstract.component';
import {ContactComponent} from './contact/contact.component';

export const homeRouter = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'abstract',
        pathMatch: 'full'
      },
      {
        path: 'abstract',
        component: AbstractComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];
