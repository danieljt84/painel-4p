import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


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


  dataSource = new MatTableDataSource<dados>();
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
export interface dados {
  empresa: string;
  local: string;
  rede: string;
  ramo: string;
  pesquisa_dados: Pesquisa_Dados[];
  expanded: boolean;
}

export interface Pesquisa_Dados {
  item: string;
  valor: number;
  estoque: number;
  validade: Date;
  status: string;
}

const ELEMENT_DATA: dados[] = [
  {
    "empresa": "PRAMESA",
    "local": "'ATACADÃO NOVA",
    "rede": "ATACADÃO",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ATACADÃO VELHO",
    "rede": "ATACADÃO",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ASSAI NOVA",
    "rede": "ASSAI",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  },
  {
    "empresa": "PRAMESA",
    "local": "'ASSAI VELHO",
    "rede": "ASSAI",
    "ramo": "ATACADO",
    "pesquisa_dados": [
      {
        'item': "MOLHO DE TOMATE 320G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      },
      {
        'item': "MOLHO DE TOMATE 400G",
        'valor': 3.29,
        'estoque': 10,
        'validade': new Date("2019-01-16"),
        'status':'Em estoque'
      }
    ],
    "expanded": false
  }
];
