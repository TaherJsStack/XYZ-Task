import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsFormComponent } from './leads-form/leads-form.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { sharedMaterialModule } from 'src/app/shared/sharedMaterialModule';
import { SharedModule } from 'src/app/shared/SharedModule';

@NgModule({
  declarations: [
    LeadsComponent,
    LeadsListComponent,
    LeadsFormComponent,
    LeadDetailsComponent,

  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    sharedMaterialModule,
    SharedModule
  ]
})
export class LeadsModule { }
