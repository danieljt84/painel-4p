import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';


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
  @ViewChild(MatSort) sort: MatSort;


  dataSource = new MatTableDataSource<Data>();
  columnsToDisplay = ['id','local', 'rede', 'ramo'];

  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }


  manageAllRows(flag: boolean) {
    ELEMENT_DATA.forEach(row => {
      row.expanded = flag;
    })
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  constructor() {
    this.dataSource.data = ELEMENT_DATA;
  }

  ngOnInit(): void {
    console.log(this.dataSource.data);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
