import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/SharedModule';
import { sharedMaterialModule } from 'src/app/shared/sharedMaterialModule';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  standalone: true,
  imports: [sharedMaterialModule, SharedModule],
})
export class SnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }


  ngOnInit(): void {
  }

}
