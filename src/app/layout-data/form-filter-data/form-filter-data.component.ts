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
      if(values!=null){
       if(this.filtersSelected.get(values[0]).includes(values[1])){
         //Removendo valor que esta contido
        this.filtersSelected.get(values[0]).splice(this.filtersSelected.get(values[0]).indexOf(values[1]), 1);
        }else{
          //Adicionando valor que ainda não estava contido
          this.filtersSelected.get(values[0]).push(values[1]);
        }
        this.filters = this.dataTableService.addFilter(this.filtersSelected);
      }
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


}
