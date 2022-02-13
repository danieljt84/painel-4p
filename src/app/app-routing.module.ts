import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutDataComponent } from './layout-data/layout-data.component';
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';
import { DataDetailsResolve } from './resolver/details/data-details.resolver';
import { DataPhotoResolver } from './resolver/gallery/data-photo.resolver';

const routes: Routes = [
  {path : '', pathMatch:'full', component:AppComponent},
  { path: 'dados', component: LayoutDataComponent, resolve:{datas: DataDetailsResolve}},
  { path: 'galeria', component: LayoutGalleryComponent,resolve: {datas: DataPhotoResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
