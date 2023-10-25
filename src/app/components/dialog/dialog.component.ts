import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeadModal } from 'src/app/modals/lead.modal';
import { LeadsService } from 'src/app/service/leads.service';
import { SharedModule } from 'src/app/shared/SharedModule';
import { sharedMaterialModule } from 'src/app/shared/sharedMaterialModule';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [sharedMaterialModule, SharedModule],
})

export class DialogComponent implements OnInit, OnDestroy {

  constructor(
    public  dialog:       MatDialog,
    private leadsService: LeadsService,
    @Inject(MAT_DIALOG_DATA) public data: {lead:LeadModal,list:LeadModal[]},
  ) {}

  ngOnInit(): void { }

  selectedChange(lead_id: string, lead: LeadModal, event: any) {
    if (!lead.duplicate_of && event) {
      lead.duplicate_of = this.data.lead.lead_id
      this.leadsService.updateLeadByid(lead_id, lead).subscribe(res => {
      })
    } else if (lead.duplicate_of && !event) {
      lead.duplicate_of = null
      this.leadsService.updateLeadByid(lead_id, lead).subscribe(res => {
      })
    }
  }

  ngOnDestroy(): void {
  }


}
