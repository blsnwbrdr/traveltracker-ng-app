import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.scss']
})
export class SharingComponent implements OnInit {
  usernameInputDisplay:boolean = true;

  constructor() { }

  ngOnInit(): void {
    // this.usernameInputDisplay = false;
  }

}
