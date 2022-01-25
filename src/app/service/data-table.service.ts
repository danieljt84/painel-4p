import { Injectable } from '@angular/core';
import { Data } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private filters: Map<string, string[]>;
  datas: Data[];
  datasFiltered:Data[]=[];

  constructor() {
    this.createDatas();
    this.filters = new Map<string, string[]>();
    this.createFieldsMap(this.datas);
  }

  //Retorna os campos a serem usados nos filtro
  //Retira os valores repetidos
  getFieldsTable() {
    return this.filters;
  }

  getDataTable() {
    if(this.datasFiltered.length==0){
      return this.datas;
    }else{
      return this.datasFiltered;
    }
  }
  //Cria os arrays dos filtros
  //Insere os filtros possiveis para cada tipo
  //Retira os valores repetidos
  createFieldsMap(datas: Data[]) {
    this.filters.set('empresa', []);
    this.filters.set('ramo', []);
    this.filters.set('rede', []);
    this.filters.set('local', []);
    this.filters.set('tipoPesquisa', []);

    datas.forEach(value => {
      this.filters.get('empresa').push(value.empresa);
      this.filters.get('ramo').push(value.ramo);
      this.filters.get('rede').push(value.rede);
      this.filters.get('local').push(value.local);
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
   this.datasFiltered = [];
   //Função onde recebo o nome do campo para filtrar os valores
    let functionFilter = (key: string) => {
      this.datas.filter((data: any) => values.get(key).includes(data[key]))
        .forEach(data => {
          if (!this.datasFiltered.includes(data)) this.datasFiltered.push(data)
        });
      this.filters.clear();
      this.createFieldsMap(this.datasFiltered)
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
    this.createFieldsMap(this.datas)
    return this.filters;
  }

  createDatas(){
    this.datas = [
      {
        "empresa": "PRAMESA",
        "local": "ATACADÃO NOVA",
        "rede": "ATACADÃO",
        "ramo": "ATACADO",
        "pesquisa_Data": [
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
        "local": "ATACADÃO VELHO",
        "rede": "ATACADÃO",
        "ramo": "ATACADO",
        "pesquisa_Data": [
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
        "local": "ASSAI NOVA",
        "rede": "ASSAI",
        "ramo": "ATACADO",
        "pesquisa_Data": [
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
        "local": "ASSAI VELHO",
        "rede": "ASSAI",
        "ramo": "ATACADO",
        "pesquisa_Data": [
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
  }
}



