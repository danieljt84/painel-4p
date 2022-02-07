import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataFile } from '../model/data-file';
import { DataTableService } from '../service/data-table.service';

@Component({
  selector: 'app-layout-data',
  templateUrl: './layout-data.component.html',
  styleUrls: ['./layout-data.component.css']
})
export class LayoutDataComponent implements OnInit {
   datas:DataFile[];
  ///Capturo os dados do Resolver e passo para o dataTableService para processament
  constructor(private route: ActivatedRoute,private dataTableService:DataTableService) {
    this.dataTableService.transform(route.snapshot.data['datas']);
   }

  ngOnInit(): void {
  }

}
