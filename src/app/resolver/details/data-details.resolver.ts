import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataFileDetails } from "src/app/model/detail/datafile-details";
import { ApiService } from "src/app/service/api.service";
@Injectable({
  providedIn: 'root'
})
export class DataDetailsResolve implements Resolve<DataFileDetails[]> {

  constructor(private apiService:ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DataFileDetails[]>  {
     return this.apiService.getDataDetails(null);
  }
}
