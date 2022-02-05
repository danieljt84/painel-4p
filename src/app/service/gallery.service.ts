import { Injectable } from '@angular/core';
import { DataFile } from '../model/data-file';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  datasPhotosFiltered: DataFile[] = [];
  private filters: Map<string, string[]>;
  datas:DataFile[];

  constructor(private apiService:ApiService) {
    apiService.getDatas().subscribe(data => this.datas = data);
    this.filters = new Map<string, string[]>();
    this.createFieldsMap(this.datas);
  }

  //Se tem dados filtrado, envia os filtrados
  getDataPhotos() {
    if(this.datasPhotosFiltered.length==0){
      return this.datas;
    }else{
      return this.datasPhotosFiltered;
    }
  }

  getFieldsTable() {
    return this.filters;
  };

  //Seguindo a regra de negócio, se tem local, nao precisa de rede, ramo;
  //Seguindo a regra de negócio, se tem rede, nao precisa de ramo;
  //Filtro os valores pelos 'li' selecionados e adiciono a um novo array de retorno
  //Se não tiver 'li' selecionado, retorno o array padrão recebi pelo back-end
  addFilter(values: Map<string, string[]>) {
    this.datasPhotosFiltered = [];
    //Função onde recebo o nome do campo para filtrar os valores
    let functionFilter = (key: string) => {
      this.datas.filter((data: any) => values.get(key).includes(data[key].name))
        .forEach(data => {
          if (!this.datasPhotosFiltered.includes(data)) this.datasPhotosFiltered.push(data)
        });
      this.filters.clear();
      this.createFieldsMap(this.datasPhotosFiltered)
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

  //Cria os arrays dos filtros
  //Insere os filtros possiveis para cada tipo
  //Retira os valores repetidos
  createFieldsMap(datas: DataFile[]) {
    this.filters.set('brand', []);
    this.filters.set('project', []);
    this.filters.set('chain', []);
    this.filters.set('shop', []);
    this.filters.set('section', []);

    datas.forEach(data => {
      if (!this.filters.get('brand').includes(data.brand.name)) this.filters.get('brand').push(data.brand.name);
      if (!this.filters.get('project').includes(data.project)) this.filters.get('project').push(data.project);
      if (!this.filters.get('chain').includes(data.brand.chain.name)) this.filters.get('chain').push(data.brand.chain.name);
      if (!this.filters.get('shop').includes(data.shop.name)) this.filters.get('shop').push(data.shop.name);
      data.photos.forEach(photo => {
        if (!this.filters.get('secao').includes(photo.section)) this.filters.get('section').push(photo.section)
      });
    });
  }
}
