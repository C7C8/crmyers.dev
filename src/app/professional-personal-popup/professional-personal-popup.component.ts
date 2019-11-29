import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-professional-personal-popup',
  templateUrl: './professional-personal-popup.component.html',
  styleUrls: ['./professional-personal-popup.component.scss']
})
export class ProfessionalPersonalPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProfessionalPersonalPopupComponent>) { }

  ngOnInit() {
  }

  selectPersonal() {
      console.log('Selected personal');
      this.dialogRef.close('personal');
  }

  selectProfessional(): void {
      console.log('Selected resume');
      this.dialogRef.close('professional');
  }
}
