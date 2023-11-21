import { Component, OnInit } from '@angular/core';
import { History } from './models/history.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss'],
})
export class HistoriesComponent implements OnInit {
  public histories: History[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getHistories();
  }

  async getHistories() {
    await this.http
      .get<History[]>(`${environment.apiUrl}/histories`)
      .subscribe((data) => {
        this.histories = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Loja',
        property: 'store',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1,
      },
      {
        label: 'Janeiro',
        property: 'january',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Fevereiro',
        property: 'february',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Março',
        property: 'march',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Abril',
        property: 'april',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Maio',
        property: 'may',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Junho',
        property: 'june',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Julho',
        property: 'july',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Agosto',
        property: 'august',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Setembro',
        property: 'september',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Outubro',
        property: 'october',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Novembro',
        property: 'november',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
      {
        label: 'Dezembro',
        property: 'december',
        isCustom: true,
        componentType: 'money',
        flexValue: 1,
      },
    ],
  };
}
