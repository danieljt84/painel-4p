import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-layout-gallery',
  templateUrl: './layout-gallery.component.html',
  styleUrls: ['./layout-gallery.component.css']
})
export class LayoutGalleryComponent implements OnInit {

  constructor(private route:ActivatedRoute,private galleryService:GalleryService ) {
     this.galleryService.transform(route.snapshot.data['datas']);

   }

  ngOnInit(): void {
  }

}
