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

  toggleList() {
    if ($('#ul').css("visibility") == "hidden") {
      $('#ul').css("visibility", "visible");
    } else {
      $('#ul').css("visibility", "hidden");
    }
  }

  getValueLi(event: any) {
    if (!event.target.classList.contains('selected')) {
      event.target.classList.add('selected');
      $('#ramo').val(this.addString($('#ramo').val(), event.target.value));
    } else {
      event.target.classList.remove('selected');
      $('#ramo').val(this.removeString($('#ramo').val(), event.target.value));
    }
  }

  filterLi(event:any){

  }

  removeString(completeString: string, stringToRemove: string) {
    completeString = completeString.replace(" " + stringToRemove, "");
    return completeString;
  }

  addString(completeString: string, stringToAdd: string): string {
    completeString = completeString + ' ' + stringToAdd;
    return completeString;
  }

}
