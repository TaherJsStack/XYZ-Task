import { Pipe, PipeTransform } from '@angular/core';
import { LeadsService } from '../service/leads.service';
import { LeadModal } from '../modals/lead.modal';

@Pipe({
  name: 'leadName'
})
export class LeadNamePipe implements PipeTransform {

  LeadsList: LeadModal[] = [];

  constructor(
    private leadsService: LeadsService
  ) {
    this.getSharedLeadList()
  }

  transform(value: string): unknown {
    return this.getLeadName(value);
  }

  getSharedLeadList(){
    this.leadsService.data$.subscribe(res => {
      this.LeadsList  = res
    })
  }

  getLeadName(duplicate_of_Value: string ){
    if (this.LeadsList.length && duplicate_of_Value) {
      return this.LeadsList.find(i => i.duplicate_of === duplicate_of_Value)?.source as string
    }
    return duplicate_of_Value
  }

}
