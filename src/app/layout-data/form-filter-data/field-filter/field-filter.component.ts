import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataTable } from 'src/app/model/data-table';
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
  @Input() filterBehaviorSubject: BehaviorSubject<string[]>;
  search: any = '';
  liSelected: string[] = [];
  id_ul: string = '';
  fields: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.id_ul = this.id_input + "_ul";
    console.log(this.filters)
  }


  toggleList() {
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
      $("#" +this.id_input).val(this.addString($("#" +this.id_input).val(), event.target.innerText));
      this.addfilter(this.label, event.target.innerText)
    } else {
      event.target.classList.remove('selected');
      for (var i = 0; i < this.liSelected.length; i++) {
        if (this.liSelected[i] === event.target.innerText) {
          this.liSelected.splice(i, 1);
        }
      }
      $("#" + this.id_input).val(
        this.removeString($("#" + this.id_input).val(), event.target.innerText)
      );
      this.addfilter(this.label, event.target.innerText)
    }
  }

  //Emite o valor ao evento no componente pai, para atualizar a lista de filtros
  addfilter(type: string, value: string) {
    //uso o atributo 'label' para passar como key do map
    this.filterBehaviorSubject.next([type.toLowerCase(), value])
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

}
