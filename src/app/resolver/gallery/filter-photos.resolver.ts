import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class FilterPhotosResolver implements Resolve<any> {
  constructor(private apiService:ApiService){
  }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     return this.apiService.getFilterPhotos(null);
  }
}
