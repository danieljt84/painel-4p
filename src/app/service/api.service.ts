import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataFile } from '../model/data-file';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getDatas(){
     return this.http.get<DataFile[]>(environment.apiUrl+"datafile")
  }
}
