import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataFile } from '../model/data-file';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getDatas(){
     return this.http.get<DataFile[]>("http://localhost:8080/datafile");
  }
}
