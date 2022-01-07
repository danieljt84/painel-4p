import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-form-filter-data',
  templateUrl: './form-filter-data.component.html',
  styleUrls: ['./form-filter-data.component.css']
})
export class FormFilterDataComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $('#industria').val("ola")
  }

  toggleList(){
			$('#ul').css("visibility","visible");
  }

}
