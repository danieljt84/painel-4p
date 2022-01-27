import { Injectable } from '@angular/core';
import { DataPhoto } from '../model/gallery/data-photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  datasPhotosFiltered: DataPhoto[] = [];
  private filters: Map<string, string[]>;
  dataPhotos: DataPhoto[];


  constructor() {
    this.createDatas();
    this.filters = new Map<string, string[]>();
    this.createFieldsMap(this.dataPhotos);
  }

  getDataPhotos() {
    return this.dataPhotos;
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
      this.dataPhotos.filter((data: any) => values.get(key).includes(data[key]))
        .forEach(data => {
          if (!this.datasPhotosFiltered.includes(data)) this.datasPhotosFiltered.push(data)
        });
      this.filters.clear();
      this.createFieldsMap(this.datasPhotosFiltered)
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
    this.createFieldsMap(this.dataPhotos)
    return this.filters;
  }

  //Cria os arrays dos filtros
  //Insere os filtros possiveis para cada tipo
  //Retira os valores repetidos
  createFieldsMap(datas: DataPhoto[]) {
    this.filters.set('empresa', []);
    this.filters.set('ramo', []);
    this.filters.set('rede', []);
    this.filters.set('local', []);
    this.filters.set('secao', []);

    datas.forEach(value => {
      if (!this.filters.get('empresa').includes(value.empresa)) this.filters.get('empresa').push(value.empresa);
      if (!this.filters.get('ramo').includes(value.ramo)) this.filters.get('ramo').push(value.ramo);
      if (!this.filters.get('rede').includes(value.rede)) this.filters.get('rede').push(value.rede);
      if (!this.filters.get('local').includes(value.local)) this.filters.get('local').push(value.local);
      value.photos.forEach(photo => {
        if (!this.filters.get('secao').includes(photo.secao)) this.filters.get('secao').push(photo.secao)
      });
    });
  }

  createDatas() {
    this.dataPhotos = [{
      "empresa": "PRAMESA",
      "data": "25/01/2022",
      "local": "ATACADÃO NOVA IGUAÇU",
      "promotor": "NOVA IGUAÇU GRADE 1",
      "ramo": "ATACADO",
      "rede": "ATACADÃO",
      "photos": [{
        "url": "https://picviewer.umov.me/Pic/GetImage?id=359566770&token=1129afce3f4739285adaf8808e9b84d4",
        "secao": "PONTO NATURAL"
      }, {
        "url": "https://picviewer.umov.me/Pic/GetImage?id=359567175&token=4af32a29896cd7ffd593f80675ac10ea",
        "secao": "PONTO NATURAL"
      }, {
        "url": "https://picviewer.umov.me/Pic/GetImage?id=359566657&token=51b9acb59849a01734b70512f86b5754",
        "secao": "PONTO NATURAL"
      }]
    },
    {
      "empresa": "PRAMESA",
      "data": "25/01/2022",
      "local": "ATACADÃO NOVA IGUAÇU",
      "promotor": "CAMPO GRANDE GRADE 1",
      "ramo": "ATACADO",
      "rede": "ATACADÃO",
      "photos": [
        {
          "url": "https://picviewer.umov.me/Pic/GetImage?id=359567833&token=0ba11d034c7cc150cfcfa082cd8cdd0e",
          "secao": "PONTO NATURAL"
        }
      ]
    },
    {
        "empresa": "PRAMESA",
        "data": "25/01/2022",
        "local": "ASSAI CAMPO GRANDE",
        "promotor": "CAMPO GRANDE GRADE 1",
        "ramo": "ATACADO",
        "rede": "ASSAI",
        "photos": [
          {
            "url": "https://picviewer.umov.me/Pic/GetImage?id=359567833&token=0ba11d034c7cc150cfcfa082cd8cdd0e",
            "secao": "PONTO NATURAL"
          }
        ]
    }
  ]
  }
}
