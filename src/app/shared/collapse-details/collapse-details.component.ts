import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-details',
  templateUrl: './collapse-details.component.html',
  styleUrls: ['./collapse-details.component.css']
})
export class CollapseDetailsComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
