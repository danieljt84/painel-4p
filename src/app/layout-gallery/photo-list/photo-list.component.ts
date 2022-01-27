import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataPhoto } from 'src/app/model/gallery/data-photo';
import { DataPhotoGrid } from 'src/app/model/gallery/data-photo-grid';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnChanges {

  datas: DataPhoto[] = [];
  datasGrid: DataPhotoGrid[] = [];
  rows: any[] = [];

  constructor(private galleyService: GalleryService) { }


  ngOnInit(): void {
    this.datas = this.galleyService.getDataPhotos();
    this.transform();
    this.rows = this.groupColumns(this.datasGrid);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rows = this.groupColumns(this.datasGrid);
  }

  transform() {
    this.datas.forEach(data => {
      let dataGrid: DataPhotoGrid = new DataPhotoGrid();
      dataGrid.data = data.data;
      dataGrid.local = data.local;
      dataGrid.empresa = data.empresa;
      dataGrid.promotor = data.promotor;
      dataGrid.ramo = data.ramo;
      dataGrid.rede = data.rede;
      dataGrid.ramo = data.ramo;
      data.photos.forEach(photo => {
        let newdataGrid: DataPhotoGrid;
        newdataGrid = dataGrid;
        dataGrid.secao = photo.secao;
        dataGrid.url = photo.url;
        this.datasGrid.push(dataGrid);
      })
    })
  }


  groupColumns(photos: DataPhotoGrid[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
