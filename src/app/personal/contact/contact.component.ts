import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('gpgKey', { static: false } ) gpgKey: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  copyKey(): void {
      const tmp = document.createElement('textarea');
      console.log(this.gpgKey.nativeElement);
      tmp.value = this.gpgKey.nativeElement.innerText;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
  }

}
