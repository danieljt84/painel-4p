import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';
import { PhotoListComponent } from './layout-gallery/photo-list/photo-list.component';
import { PhotoComponent } from './layout-gallery/photo/photo.component';
import { FormFilterComponent } from './layout-gallery/form-filter/form-filter.component';
import { CardComponent } from './shared/card/card.component';
import { DataTableComponent } from './layout-data/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { GalleryComponent } from './gallery/gallery.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormFilterDataComponent } from './layout-data/form-filter-data/form-filter-data.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    LayoutGalleryComponent,
    PhotoListComponent,
    PhotoComponent,
    FormFilterComponent,
    CardComponent,
    DataTableComponent,
    GalleryComponent,
    FormFilterDataComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
