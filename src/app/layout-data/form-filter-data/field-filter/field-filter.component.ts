import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-field-filter',
  templateUrl: './field-filter.component.html',
  styleUrls: ['./field-filter.component.css']
})
export class FieldFilterComponent implements OnInit {

  @Input() filters: string[];
  @Input() id_input: string;
  @Input() label: string;
  @Input() filterBehaviorSubject: BehaviorSubject<any[]>;
  search: any = '';
  liSelected: string[] = [];
  id_ul: string = '';
  fields: string[] = [];
  input: any = '';
  event: any;


  constructor() { }

  ngOnInit(): void {
    this.id_ul = this.id_input + "_ul";
  }

  toggleList(event: any) {
    event.target.classList.add('clickable');
    this.input = event;
    if ($("#" + this.id_ul).css('visibility') == 'hidden') {
      $("#" + this.id_ul).css('visibility', 'visible');
    } else {
      $("#" + this.id_ul).css('visibility', 'hidden');
    }
  }
  //Pega,pelo o evento, o valor da lista
  //Adiciona o valor ao input e a classe de selecionada ao item da lista
  getValueLi(event: any) {
    if (!event.target.classList.contains('selected')) {
      event.target.classList.add('selected');
      this.liSelected.push(event.target.innerText);
      $("#" + this.id_input).val(this.addString($("#" + this.id_input).val(), event.target.innerText));
      //this.addfilter(this.label, event.target.innerText)
    } else {
      event.target.classList.remove('selected');
      for (var i = 0; i < this.liSelected.length; i++) {
        if (this.liSelected[i] === event.target.innerText) {
          this.liSelected.splice(i, 1);
        }
        this.removeFilter();
      }
      $("#" + this.id_input).val(
        this.removeString($("#" + this.id_input).val(), event.target.innerText)
      );
    }
  }

  //Remove valor da lista ao campo input
  removeString(completeString: any, stringToRemove: string) {
    completeString = completeString.replaceAll(' ' + stringToRemove, '');
    return completeString;
  }

  //Adiciona valor da lista ao campo input
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

  //Função chamada no click fora do elemento
  //Pego o valor do input do elemento, separo e faco o envio
  //Ao clickar no elemento, é adicionado a classe 'clickable', dando assim a permissão de usar essa função
  //Apos o processo, retiro a classe do elemento para desativar a função
  sendFilter() {
    if (this.input != '') {
      if (this.input.target.classList.contains('clickable')) {
        this.input.target.classList.remove('clickable')
        $("#" + this.id_ul).css('visibility', 'hidden');
        if (this.liSelected.length != 0) this.addfilter(this.id_input, this.liSelected);
      }
    }
  }

  removeFilter() {
    if (this.input != '') {
      if (this.input.target.classList.contains('clickable')) {
        this.addfilter(this.id_input, this.liSelected);
      }
    }
  }
  //Emite o valor ao evento no componente pai, para atualizar a lista de filtros
  addfilter(type: string, values: string[]) {
    //uso o atributo 'label' para passar como key do map
    this.filterBehaviorSubject.next([type.toLowerCase(), values]);
  }
}
