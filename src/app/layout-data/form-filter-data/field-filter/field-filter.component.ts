import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-filter',
  templateUrl: './field-filter.component.html',
  styleUrls: ['./field-filter.component.css']
})
export class FieldFilterComponent implements OnInit {

  @Input() values:string[]=[];
  @Input() id_input:string;
  @Input() label:string;


  constructor() { }

  ngOnInit(): void {
  }

}
