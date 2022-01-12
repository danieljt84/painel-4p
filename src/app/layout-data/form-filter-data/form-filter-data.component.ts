import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-form-filter-data',
  templateUrl: './form-filter-data.component.html',
  styleUrls: ['./form-filter-data.component.css'],
})
export class FormFilterDataComponent implements OnInit {
  search: any = '';
  liSelected: string[] = [];
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ];
  constructor() {}

  ngOnInit(): void {
    $('#industria').val('ola');
  }

  toggleList() {
    if ($('#ul').css('visibility') == 'hidden') {
      $('#ul').css('visibility', 'visible');
    } else {
      $('#ul').css('visibility', 'hidden');
    }
  }

  getValueLi(event: any) {
    if (!event.target.classList.contains('selected')) {
      event.target.classList.add('selected');
      this.liSelected.push(event.target.innerText);
      $('#ramo').val(this.addString($('#ramo').val(), event.target.innerText));
    } else {
      event.target.classList.remove('selected');
      for( var i = 0; i < this.liSelected.length; i++){
        if ( this.liSelected[i] === event.target.innerText ) {
            this.liSelected.splice(i, 1);
        }
    }
      $('#ramo').val(
        this.removeString($('#ramo').val(), event.target.innerText)
      );
    }
  }

  filterLi(event: any) {}

  removeString(completeString: any, stringToRemove: string) {
    completeString = completeString.replaceAll(' ' + stringToRemove, '');
    return completeString;
  }

  addString(completeString: string, stringToAdd: string): string {
    completeString = completeString + ' ' + stringToAdd;
    return completeString;
  }

  isSelected(value: string): boolean {
    if (this.liSelected.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
}
