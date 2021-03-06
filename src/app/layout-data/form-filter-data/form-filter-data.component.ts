import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, Subscription } from 'rxjs';
import { DataTableService } from 'src/app/service/data-table.service';
import { EventEmiterService } from 'src/app/service/event-emiter.service';

declare var $: any;

@Component({
  selector: 'app-form-filter-data',
  templateUrl: './form-filter-data.component.html',
  styleUrls: ['./form-filter-data.component.css'],
})
export class FormFilterDataComponent implements OnInit,OnDestroy {

  filters: Map<string, string[]>;
  filtersSelected: Map<string, string[]>;
  filterBehaviorSubject: BehaviorSubject<any[]>;
  subscription: Subscription;

  constructor(private dataTableService: DataTableService) {
  }

  ngOnInit(): void {
    this.filters = this.dataTableService.getFieldsTable();
    this.filtersSelected = new Map<string, string[]>();
    this.filterBehaviorSubject = new BehaviorSubject<any[]>(null);
    this.createFieldsSelectedMap();
    this.subscription = this.filterBehaviorSubject.subscribe(values => {
      if (values != null) {
        if (this.filtersSelected.get(values[0]) != null) {
          while (this.filtersSelected.get(values[0]).length) {
            this.filtersSelected.get(values[0]).pop();
          }
          values[1].forEach((value: string) => this.filtersSelected.get(values[0]).push(value));
          this.filters = this.dataTableService.addFilter(this.filtersSelected);
        }
      }
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  //Ao clickar no submit é disparado um evento global, que será capturado pelo componente da tabela de dadoss
  submitFilter(){
    EventEmiterService.get('submitFilter').emit(true);
  }
  //cria os arrays dos filtros selecionados
  createFieldsSelectedMap() {
    this.filtersSelected.set('brand', []);
    this.filtersSelected.set('project', []);
    this.filtersSelected.set('chain', []);
    this.filtersSelected.set('shop', []);
    this.filtersSelected.set('tipoPesquisa', []);
  }


}
