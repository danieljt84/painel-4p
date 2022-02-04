import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDataComponent } from './layout-data/layout-data.component';
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';

const routes: Routes = [
  { path: 'dados', component: LayoutDataComponent },
  { path: 'galeria', component: LayoutGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
