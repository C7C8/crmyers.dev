import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfessionalPersonalPopupComponent } from './professional-personal-popup/professional-personal-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit {

  constructor(public dialog: MatDialog, public router: Router) { }

    async ngAfterViewInit() {
      const dialogRef = this.dialog.open(ProfessionalPersonalPopupComponent, {
          width: '66%',
          height: '66%',
          disableClose: true
      });

      const result: string = await dialogRef.afterClosed().toPromise();

      if (result === 'personal') {
          this.router.navigate(['/personal']);
      } else {
          this.router.navigate(['/professional']);
      }
    }


}
