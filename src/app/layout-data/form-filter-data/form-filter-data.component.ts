import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { DataTable } from 'src/app/model/data-table';
import { DataTableService } from 'src/app/service/data-table.service';
declare var $: any;

@Component({
  selector: 'app-form-filter-data',
  templateUrl: './form-filter-data.component.html',
  styleUrls: ['./form-filter-data.component.css'],
})
export class FormFilterDataComponent implements OnInit {

  values: DataTable;
  filters: Map<string, string[]>;
  filtersSelected: Map<string, string[]>;
  filterBehaviorSubject: BehaviorSubject<any[]>;

  constructor(private dataTableService: DataTableService) {
    this.values = this.dataTableService.getDataTable();
    this.filters = this.dataTableService.getFieldsTable();
    this.filtersSelected = new Map<string, string[]>();
    this.filterBehaviorSubject = new BehaviorSubject<any[]>(null);

    this.createFieldsSelectedMap();
  }

  ngOnInit(): void {
    this.filterBehaviorSubject.subscribe(values => {
      if (values != null) {
        if (this.filtersSelected.get(values[0]) != null) {
          while (this.filtersSelected.get(values[0]).length) {
            this.filtersSelected.get(values[0]).pop();
          }
          values[1].forEach((value: string) => this.filtersSelected.get(values[0]).push(value));
          this.filters = this.dataTableService.addFilter(this.filtersSelected);
        }
      }
    })
  }

  submitFilter(){
     this.dataTableService()
  }
  //cria os arrays dos filtros selecionados
  createFieldsSelectedMap() {
    this.filtersSelected.set('industria', []);
    this.filtersSelected.set('ramo', []);
    this.filtersSelected.set('rede', []);
    this.filtersSelected.set('local', []);
    this.filtersSelected.set('tipoPesquisa', []);
  }


}
