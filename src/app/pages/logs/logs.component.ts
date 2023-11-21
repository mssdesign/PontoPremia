import { Component, OnInit } from '@angular/core';
import { Log } from './models/log.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent  implements OnInit {

  public logs: Log[] = [];
  showTime: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    await this.http
      .get<Log[]>(`${environment.apiUrl}/logs`)
      .subscribe((data) => {
        this.logs = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Responsável',
        property: 'responsible',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Nome',
        property: 'name',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'CPF / CNPJ',
        property: 'identifier',
        isCustom: true,
        componentType: 'identifier',
        flexValue: 1
      },
      {
        label: 'Tipo',
        property: 'type',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Data e hora',
        property: 'date',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'IP',
        property: 'ip',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
    ],
  };

}
