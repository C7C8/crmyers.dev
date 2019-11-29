import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {
    ngOnInit(): void {
        console.log('Made it to personal home');
    }
}
