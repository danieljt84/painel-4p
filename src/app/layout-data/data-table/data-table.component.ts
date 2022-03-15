import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmiterService } from 'src/app/service/event-emiter.service';
import { DataTableService } from 'src/app/service/data-table.service';
import { DataFileDetails } from 'src/app/model/detail/datafile-details';
import { DataDetailGrid } from 'src/app/model/detail/data-detail-grid';


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
  values: DataFileDetails[] = [];
  datasDetailsGrid: DataDetailGrid[] = [];
  opened: boolean = true;
  @ViewChild(MatSort) sort: MatSort;


  dataSource = new MatTableDataSource<any>();
  columnsToDisplay = ['id','shop', 'promoter', 'project'];
  columnsToDisplayUntied = ['data'];


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

  constructor(private dataTableService:DataTableService) {}

  ngOnInit(): void {
  //Me inscrevo no evento gerado pelo clique do submit
  //Atualizo o dataSouce com os dados filtrados
  this.values = this.dataTableService.getDataTable();
  this.groupColumnsUntied()
  this.changeMode(this.opened);
   EventEmiterService.get('submitFilter').subscribe(value=> {
     if(value){
       this.values = this.dataTableService.getDataTable();
       this.groupColumnsUntied()
       this.changeMode(this.opened);
     }
   });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  groupColumnsUntied(){
    this.values.forEach(data =>{
      const dataDetailsGrid: DataDetailGrid = new DataDetailGrid();
      dataDetailsGrid.brand = data.brand;
      dataDetailsGrid.chain = data.chain;
      dataDetailsGrid.data = data.data;
      dataDetailsGrid.shop = data.shop;
      dataDetailsGrid.project = data.project;
      dataDetailsGrid.promoter = data.promoter;
      data.details.forEach(detail =>{
        let newDataDetailsGrid: DataDetailGrid;
        newDataDetailsGrid = {...dataDetailsGrid}
        newDataDetailsGrid.product = detail.product.name;
        newDataDetailsGrid.price = detail.price;
        newDataDetailsGrid.stock = detail.stock;
        newDataDetailsGrid.validity = detail.validity;
        newDataDetailsGrid.ruptura = detail.product.name;
        this.datasDetailsGrid.push(newDataDetailsGrid);
      });
    });
  }
  groupColumns(values:DataFileDetails[]){
    this.dataSource.data = values;
  }

  changeMode(mode: boolean){
    if (mode){
      this.opened = false;
      this.dataSource.data = this.datasDetailsGrid;
    } else {
      this.opened = true;
      this.dataSource.data = this.values;
    }
  }
}
