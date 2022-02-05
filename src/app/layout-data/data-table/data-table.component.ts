import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmiterService } from 'src/app/service/event-emiter.service';
import { DataTableService } from 'src/app/service/data-table.service';
import { DataFile } from 'src/app/model/data-file';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit, AfterViewInit {

  title = 'angular-mat-table-example';
  values:DataFile[] = [];
  @ViewChild(MatSort) sort: MatSort;


  dataSource = new MatTableDataSource<DataFile>();
  columnsToDisplay = ['id','local', 'rede', 'ramo'];

  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }


  manageAllRows(flag: boolean) {
    this.values.forEach(row => {
      row.expanded = flag;
    })
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  constructor(private dataTableService:DataTableService) {
    this.values = this.dataTableService.getDataTable();
    this.dataSource.data = this.values;
  }

  ngOnInit(): void {
  //Me inscrevo no evento gerado pelo clique do submit
  //Atualizo o dataSouce com os dados filtrados
   EventEmiterService.get('submitFilter').subscribe(value=> {
     if(value){
       this.dataSource.data = this.dataTableService.getDataTable();
     }
   });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
