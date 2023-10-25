import { Injectable } from '@angular/core';
import { LeadModal } from '../modals/lead.modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  baseURL: string = environment.apiKey + "/api/leads/";

  private dataSubject: BehaviorSubject<LeadModal[]> = new BehaviorSubject<LeadModal[]>([]);
  public data$: Observable<LeadModal[]> = this.dataSubject.asObservable();

  constructor(
    private http: HttpClient
    ) {}

  getLeads() {
    // return this.http.get<LeadModal[]>(this.baseURL)
    this.http.get<LeadModal[]>(this.baseURL).subscribe(res => {
      this.shareLeadDataList(res)
    })
  }

  shareLeadDataList(leadList :LeadModal[]) {
      const newData = ['Data 1', 'Data 2', 'Data 3'];
      this.dataSubject.next(leadList);
  }

  getLeadPotentialDuplicatesById(id: string): Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + `${id}/potential-duplicates`)
  }

  updateLeadByid(lead_id: string, lead: LeadModal): Observable<LeadModal> {
    return this.http.put<LeadModal>(this.baseURL+lead_id, lead)
  }

}
