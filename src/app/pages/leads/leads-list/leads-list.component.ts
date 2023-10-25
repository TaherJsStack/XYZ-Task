import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/service/leads.service';
import { LeadModal } from 'src/app/modals/lead.modal';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  LeadsList:        LeadModal[] = [];
  dataSource:       LeadModal[] = [];
  displayedColumns: string[]    = ['position', 'duplicate_of', 'source', 'first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'controle'];

  constructor(
    private leadsService: LeadsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getList()
    this.getSharedLeadList()
  }

  getList() {
    // this.leadsService.getLeads().subscribe(res => {
    //   this.LeadsList  = res
    //   this.dataSource = res
    // })
    this.leadsService.getLeads()
  }

  getSharedLeadList(){
    this.leadsService.data$.subscribe(res => {
      this.LeadsList  = res
      this.dataSource = res
    })
  }

  getLeadPotentialDuplicatesById(leadId: string) {
    this.leadsService.getLeadPotentialDuplicatesById(leadId).subscribe(res => {
      this.getLeadPotentialDuplicatesList(res, leadId)
    })
  }

  getLeadPotentialDuplicatesList(ids: string[], leadId: string) {
    let newList = []
    for (let index = 0; index < ids.length; index++) {
      let d = this.LeadsList.filter(lead => lead.lead_id === ids[index].toString());
      newList.push(...d)
    }
    if (newList.length) {
      this.openDialog(newList, leadId)
    } else {
      alert(newList.length.toString())
    }
  }

  openDialog(res: any, leadId: string) {
    let curentLead = this.LeadsList.find(i => i.lead_id === leadId)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        lead: curentLead,
        list: res
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  LeadToUpdate(ids: LeadModal[]) {
    for (let index = 0; index < ids.length; index++) {
      const leadToUpdate = this.LeadsList.find(i => i.duplicate_of === ids[index].lead_id);
      if (leadToUpdate) {
        // LeadToUpdate.duplicate_of = res;
        // LeadToUpdate.age = 40;
      }
    }
  }



}
