import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { DataTable } from '../model/data-table';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private dataTable: DataTable;
  private filters: Map<string, string[]>;

  constructor() {
    this.dataTable = new DataTable();
    this.filters = new Map<string, string[]>();
    this.createFieldsMap(this.dataTable);
  }

  //Retorna os campos a serem usados nos filtro
  //Retira os valores repetidos
  getFieldsTable() {
    return this.filters;
  }

  getDataTable() {
    return this.dataTable
  }
  //Cria os arrays dos filtros
  //Insere os filtros possiveis para cada tipo
  //Retira os valores repetidos
  createFieldsMap(dataTable:DataTable) {
    this.filters.set('industria', []);
    this.filters.set('ramo', []);
    this.filters.set('rede', []);
    this.filters.set('local', []);
    this.filters.set('tipoPesquisa', []);

    dataTable.datas.forEach(value => {
      this.filters.get('industria').push(value.industria);
      this.filters.get('ramo').push(value.ramo);
      this.filters.get('rede').push(value.rede);
      this.filters.get('local').push(value.local);
      this.filters.get('tipoPesquisa').push(value.tipoPesquisa)
    })

    //Removendo repeditos
    this.filters
      .forEach((filter: string[], key: string, map: Map<string, string[]>) =>
        map.set(key, filter.filter((it, i) =>
          filter.indexOf(it) === i)));
  }

  addFilter(values: Map<string, string[]>) {
    const keys = values.keys();
    const dataTableFiltered = new DataTable();
    //Pego todos as chaves do filtros passado
    for (let key of keys) {
      //Usando a chave, seleciono o array e filtro os dados do data table para conversão
      values.get(key).forEach(_value =>
        dataTableFiltered.datas = this.dataTable.datas.filter((a, i, arr) =>
          a.ramo == _value))
    }

    this.filters.clear();
    this.createFieldsMap(dataTableFiltered)
    return this.filters;
  }
}
