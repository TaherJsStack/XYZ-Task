import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { LeadsListComponent } from './leads-list/leads-list.component';

const routes: Routes = [
  {
    path: '',
    component: LeadsComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: LeadsListComponent, // child route component that the router renders
      },
      {
        path: 'child-a', // child route path
        component: LeadsListComponent, // child route component that the router renders
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
