import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeadNamePipe } from '../pipes/lead-name.pipe';
import { NgFor, NgIf, JsonPipe } from '@angular/common';

@NgModule({
  imports:      [
    CommonModule,
    JsonPipe,
    NgIf,
    NgFor,
  ],
  declarations: [
    LeadNamePipe
   ],
  exports:      [
    CommonModule,
    FormsModule,
    JsonPipe,
    NgIf,
    NgFor,
    LeadNamePipe
  ]
})
export class SharedModule { }
