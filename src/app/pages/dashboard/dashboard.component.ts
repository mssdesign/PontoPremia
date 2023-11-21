import { Component, OnInit } from '@angular/core';
import { Client } from './models/client.model';
import { ChartData } from './models/chart-data.model';
import { Store } from './models/store.model';
import { HttpClient } from '@angular/common/http';
import { MiniTableConfig } from '../../components/table-data/mini-generic-table/models/mini-table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public stores: Store[] = [];
  public chartData: ChartData[] = [];
  public clients: Client[] = [];
  percentage: String = '- 25%';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStores();
    this.getClients();
    this.getChartData();
  }

  async getClients() {
    await this.http
      .get<Client[]>(`${environment.apiUrl}/clients`)
      .subscribe((data) => {
        this.clients = data;
      });
  }

  async getStores() {
    await this.http
      .get<Store[]>(`${environment.apiUrl}/stores`)
      .subscribe((data) => {
        this.stores = data;
      });
  }

  async getChartData() {
    await this.http
      .get<ChartData[]>(`${environment.apiUrl}/chartData`)
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  public chartLabels: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
  ];

  tableClientsConfig: MiniTableConfig = {
    columns: [
      {
        label: 'Cliente',
        property: 'client',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Loja',
        property: 'store',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Pontos',
        property: 'points',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Total',
        property: 'total',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
    ],
  };

  tableStoresConfig: MiniTableConfig = {
    columns: [
      {
        label: 'Loja',
        property: 'store',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Pontos',
        property: 'points',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Total',
        property: 'total',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
    ],
  };
}
