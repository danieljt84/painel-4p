import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { LayoutGalleryComponent } from './layout-gallery/layout-gallery.component';
import { PhotoListComponent } from './layout-gallery/photo-list/photo-list.component';
import { PhotoComponent } from './layout-gallery/photo/photo.component';
import { FormFilterComponent } from './layout-gallery/form-filter/form-filter.component';
import { CardComponent } from './shared/card/card.component';
import { BNavComponent } from './b-nav/b-nav.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

=======
import { GalleryComponent } from './gallery/gallery.component';
>>>>>>> c777a1fbcd679b09f533a656c1e034bb35141138

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
<<<<<<< HEAD
    LayoutGalleryComponent,
    PhotoListComponent,
    PhotoComponent,
    FormFilterComponent,
    CardComponent,
    BNavComponent
=======
    GalleryComponent
>>>>>>> c777a1fbcd679b09f533a656c1e034bb35141138
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
