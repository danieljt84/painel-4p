import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  filterBehaviorSubject: BehaviorSubject<string[]>;

  constructor(private dataTableService: DataTableService) {
    this.values = this.dataTableService.getDataTable();
    this.filters = this.dataTableService.getFieldsTable();
    this.filtersSelected = new Map<string, string[]>();
    this.filterBehaviorSubject = new BehaviorSubject<string[]>(null);

    this.createFieldsSelectedMap();
  }

  ngOnInit(): void {
    this.filterBehaviorSubject.subscribe(values => {
      console.log(values[0]);
      this.filtersSelected.get(values[0]).push(values[1]);
    })
  }
  //cria os arrays dos filtros
  createFieldsSelectedMap() {
    this.filtersSelected.set('industria', []);
    this.filtersSelected.set('ramo', []);
    this.filtersSelected.set('rede', []);
    this.filtersSelected.set('local', []);
    this.filtersSelected.set('tipoPesquisa', []);
  }

  filterDatas(){
    
  }
}
