import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataFile } from '../model/data-file';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<DataFile[]> {
  constructor(private apiService:ApiService){
  }
  resolve(route: ActivatedRouteSnapshot): Observable<DataFile[]> {
    return this.apiService.getDatas();
  }
}
