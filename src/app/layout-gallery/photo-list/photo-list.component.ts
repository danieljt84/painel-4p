import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataFile } from 'src/app/model/data-file';
import { DataPhotoGrid } from 'src/app/model/gallery/data-photo-grid';
import { DataFilePhoto } from 'src/app/model/gallery/datafile-photo';
import { ApiService } from 'src/app/service/api.service';
import { EventEmiterService } from 'src/app/service/event-emiter.service';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  @Input() datas: DataFilePhoto[] = [];
  datasGrid: DataPhotoGrid[] = [];
  rows: any[] = [];
  opened: boolean = false;

  constructor(
    private galleryService: GalleryService,
    private apiService: ApiService
  ) {
    this.datas = this.galleryService.getDataPhotos();
    this.transform();
    this.rows = this.groupColumns(this.datasGrid);
  }

  ngOnInit(): void {
    EventEmiterService.get('submitFilter-gallery').subscribe((value) => {
      if (value) {
        this.datas = this.galleryService.getDataPhotos();
        this.transform();
        this.rows = this.groupColumns(this.datasGrid);
      }
    });
  }

  transform() {
    this.datasGrid = [];
    this.datas.forEach((data) => {
      const dataGrid: DataPhotoGrid = new DataPhotoGrid();
      dataGrid.data = data.data;
      dataGrid.local = data.shop;
      dataGrid.empresa = data.brand;
      dataGrid.promotor = data.promoter;
      dataGrid.ramo = data.project;
      data.photos.forEach((photo) => {
        let newdataGrid: DataPhotoGrid;
        newdataGrid = { ...dataGrid };
        newdataGrid.secao = photo.section;
        newdataGrid.url = photo.url;
        this.datasGrid.push(newdataGrid);
      });
    });
  }
  groupColumns(photos: DataPhotoGrid[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

  groupColumnsAgrupado(photos: DataPhotoGrid[]) {
    const newRows: DataPhotoGrid[][] = [];

    photos.forEach((photo) => {
      let filterPhotos = photos.filter((p) => p.local == photo.local);
      newRows.push(filterPhotos);
    });
    return newRows;
  }

  changeMode(mode:string) {
    if (mode!='opened') {
      this.opened = false;
      this.rows = this.groupColumnsAgrupado(this.datasGrid);
    } else {
      this.opened = true;
      this.rows = this.groupColumns(this.datasGrid);
    }
  }
}
