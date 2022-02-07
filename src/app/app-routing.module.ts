import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutDataComponent } from './layout-data/layout-data.component';
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';
import { DataResolver } from './resolver/data.resolver';

const routes: Routes = [
  {path : '', pathMatch:'full', component:AppComponent, resolve: {datas: DataResolver}},
  { path: 'dados', component: LayoutDataComponent,resolve: {datas: DataResolver} },
  { path: 'galeria', component: LayoutGalleryComponent,resolve: {datas: DataResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
