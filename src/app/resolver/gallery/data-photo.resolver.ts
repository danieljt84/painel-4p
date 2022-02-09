import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataFilePhoto } from 'src/app/model/gallery/datafile-photo';
import { ApiService } from '../../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class DataPhotoResolver implements Resolve<DataFilePhoto[]> {
  constructor(private apiService:ApiService){
  }
  resolve(route: ActivatedRouteSnapshot): Observable<DataFilePhoto[]> {
    return this.apiService.getDataPhotos(null);
  }
}
