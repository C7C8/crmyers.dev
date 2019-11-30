import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfessionalPersonalPopupComponent } from './professional-personal-popup/professional-personal-popup.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit {

  constructor(private dialog: MatDialog, private router: Router, private cookieService: CookieService) { }

    async ngAfterViewInit() {
      const cookie = this.cookieService.get('user-type');
      if (cookie) {
          this.router.navigate(cookie === 'human' ? ['/personal'] : ['/professional']);
          return;
      }

      const dialogRef = this.dialog.open(ProfessionalPersonalPopupComponent, {
          width: '66%',
          height: '66%',
          disableClose: true
      });

      const result: string = await dialogRef.afterClosed().toPromise();
      if (result === 'personal') {
          this.cookieService.set('user-type', 'human', 2147483647);
          await this.router.navigate(['/personal']);
      } else {
          this.cookieService.set('user-type', 'professional', 2147483647);
          await this.router.navigate(['/professional']);
      }
    }


}
