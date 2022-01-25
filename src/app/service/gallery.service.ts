import { Injectable } from '@angular/core';
import { DataPhoto } from '../model/gallery/data-photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  dataPhotos: DataPhoto[] = [{
    "empresa": "PRAMESA",
    "data": "25/01/2022",
    "local": "ATACADÃO NOVA IGUAÇU",
    "promotor": "NOVA IGUAÇU GRADE 1",
    "ramo": "ATACADO",
    "rede": "ATACADÃO",
    "photos": [{
      "url": "https://picviewer.umov.me/Pic/GetImage?id=359566770&token=1129afce3f4739285adaf8808e9b84d4",
      "seçao": "PONTO NATURAL"
    }, {
      "url": "https://picviewer.umov.me/Pic/GetImage?id=359567175&token=4af32a29896cd7ffd593f80675ac10ea",
      "seçao": "PONTO NATURAL"
    }, {
      "url": "https://picviewer.umov.me/Pic/GetImage?id=359566657&token=51b9acb59849a01734b70512f86b5754",
      "seçao": "PONTO NATURAL"
    }]
  }, {
    "empresa": "PRAMESA",
    "data": "25/01/2022",
    "local": "ATACADÃO NOVA IGUAÇU",
    "promotor": "CAMPO GRANDE GRADE 1",
    "ramo": "ATACADO",
    "rede": "ATACADÃO",
    "photos": [
      {
        "url": "https://picviewer.umov.me/Pic/GetImage?id=359567833&token=0ba11d034c7cc150cfcfa082cd8cdd0e",
        "seçao": "PONTO NATURAL"
      }
    ]
  }]

  constructor() { }

  getDataPhotos(){
    return this.dataPhotos;
  }
}
