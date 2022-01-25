import { Injectable } from '@angular/core';
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
  createFieldsMap(dataTable: DataTable) {
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

    //Removendo repetidos
    this.filters
      .forEach((filter: string[], key: string, map: Map<string, string[]>) =>
        map.set(key, filter.filter((it, i) =>
          filter.indexOf(it) === i)));

  }
  //Seguindo a regra de negócio, se tem local, nao precisa de rede, ramo;
   //Seguindo a regra de negócio, se tem rede, nao precisa de ramo;
  //Filtro os valores pelos 'li' selecionados e adiciono a um novo array de retorno
  //Se não tiver 'li' selecionado, retorno o array padrão recebi pelo back-end
  addFilter(values: Map<string, string[]>) {
    const dataTableFiltered = new DataTable();
    dataTableFiltered.datas = [];
   //Função onde recebo o nome do campo para filtrar os valores
    let functionFilter = (key: string) => {
      (this.dataTable.datas.filter((data: any) => values.get(key).includes(data[key])))
        .forEach(data => {
          if (!dataTableFiltered.datas.includes(data)) dataTableFiltered.datas.push(data)
        });
      this.filters.clear();
      this.createFieldsMap(dataTableFiltered)
    }
    if (values.get('local').length != 0) {
      functionFilter('local');
      return this.filters;
    }
    if (values.get('rede').length != 0) {
      functionFilter('rede');
      return this.filters;
    }
    if (values.get('ramo').length != 0) {
      functionFilter('ramo');
      return this.filters;
    }
    this.filters.clear();
    this.createFieldsMap(this.dataTable)
    return this.filters;
  }

}

const ELEMENT_DATA: dados[] = [
  {
    "empresa": "PRAMESA",
    "local": "'ATACADÃO NOVA",
    "rede": "ATACADÃO",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ATACADÃO VELHO",
    "rede": "ATACADÃO",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ASSAI NOVA",
    "rede": "ASSAI",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ASSAI VELHO",
    "rede": "ASSAI",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  }
];

