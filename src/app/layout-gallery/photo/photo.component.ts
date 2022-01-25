import { Component, Input, OnInit } from '@angular/core';
import { DataPhoto } from 'src/app/model/gallery/data-photo';
import { DataPhotoGrid } from 'src/app/model/gallery/data-photo-grid';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() dataPhotoGrid:DataPhotoGrid;

  constructor() { }

  ngOnInit(): void {
  }

}
