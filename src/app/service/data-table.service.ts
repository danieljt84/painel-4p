import { Injectable } from '@angular/core';
import { DataFile } from '../model/data-file';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private filters: Map<string, string[]>;
  datas: DataFile[];
  datasFiltered:DataFile[]=[];

  constructor(private apiService:ApiService) {
    apiService.getDatas().subscribe(data => this.datas = data);
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
  createFieldsMap(datas: DataFile[]) {
    this.filters.set('brand', []);
    this.filters.set('project', []);
    this.filters.set('chain', []);
    this.filters.set('shop', []);
    this.filters.set('tipoPesquisa', []);

    datas.forEach(datafile => {
      this.filters.get('brand').push(datafile.brand.name);
      this.filters.get('project').push(datafile.project);
      this.filters.get('chain').push(datafile.brand.chain.name);
      this.filters.get('shop').push(datafile.shop.name);
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
      this.datas.filter((data: any) => values.get(key).includes(data[key].name))
        .forEach(data => {
          if (!this.datasFiltered.includes(data)) this.datasFiltered.push(data)
        });
      this.filters.clear();
      this.createFieldsMap(this.datasFiltered)
    }
    if (values.get('shop').length != 0) {
      functionFilter('shop');
      return this.filters;
    }
    if (values.get('chain').length != 0) {
      functionFilter('chain');
      return this.filters;
    }
    if (values.get('project').length != 0) {
      functionFilter('project');
      return this.filters;
    }
    this.filters.clear();
    this.createFieldsMap(this.datas)
    return this.filters;
  }
}



