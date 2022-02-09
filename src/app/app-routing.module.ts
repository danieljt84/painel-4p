import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutDataComponent } from './layout-data/layout-data.component';
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';
import { DataPhotoResolver } from './resolver/gallery/data-photo.resolver';
import { FilterPhotosResolver } from './resolver/gallery/filter-photos.resolver';

const routes: Routes = [
  {path : '', pathMatch:'full', component:AppComponent},
  { path: 'dados', component: LayoutDataComponent},
  { path: 'galeria', component: LayoutGalleryComponent,resolve: {datas: DataPhotoResolver, filter:FilterPhotosResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
