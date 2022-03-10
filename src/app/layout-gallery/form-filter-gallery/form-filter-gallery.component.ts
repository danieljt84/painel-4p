import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EventEmiterService } from 'src/app/service/event-emiter.service';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter-gallery.component.html',
  styleUrls: ['./form-filter-gallery.component.css']
})
export class FormFilterGalleryComponent implements OnInit, OnDestroy {

  filters: Map<string, string[]>;
  filtersSelected: Map<string, string[]>;
  filterBehaviorSubject: BehaviorSubject<any[]>;
  subscription: Subscription;
  constructor(private galleryService: GalleryService) {
    this.filters = this.galleryService.getFieldsTable();
    this.filtersSelected = new Map<string, string[]>();
    this.filterBehaviorSubject = new BehaviorSubject<any[]>(null);
    this.createFieldsSelectedMap();
  }

  ngOnInit(): void {
    this.subscription = this.filterBehaviorSubject.subscribe(values => {
      if (values != null) {
        if (this.filtersSelected.get(values[0]) != null) {
          while (this.filtersSelected.get(values[0]).length) {
            this.filtersSelected.get(values[0]).pop();
          }
        }
        values[1].forEach((value: string) => this.filtersSelected.get(values[0]).push(value));
        this.filters = this.galleryService.addFilter(this.filtersSelected);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //Ao clickar no submit é disparado um evento global, que será capturado pelo componente da tabela de dadoss
  submitFilter() {
    EventEmiterService.get('submitFilter-gallery').emit(true);
  }
  //cria os arrays dos filtros selecionados
  createFieldsSelectedMap() {
    this.filtersSelected.set('brand', []);
    this.filtersSelected.set('project', []);
    this.filtersSelected.set('chain', []);
    this.filtersSelected.set('shop', []);
    this.filtersSelected.set('promoter', []);
    this.filtersSelected.set('section', []);
  }
}
