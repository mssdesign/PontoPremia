import { Component, OnInit } from '@angular/core';
import { Score } from './models/score.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent  implements OnInit {

  public score: Score[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getScores();
  }

  async getScores() {
    await this.http
      .get<Score[]>(`${environment.apiUrl}/scores`)
      .subscribe((data) => {
        this.score = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Nome do profissional',
        property: 'professionalName',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Loja',
        property: 'store',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Data da Venda',
        property: 'saleDate',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Data da Pontuação',
        property: 'scoreDate',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Validade da Pontuação',
        property: 'scoreValidity',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Status',
        property: 'status',
        isCustom: true,
        componentType: 'switch',
        flexValue: 1
      },
      {
        label: 'Ações',
        property: 'actions',
        isCustom: true,
        componentType: 'cancel',
        flexValue: 1
      },
    ],
  };

  handleToggleChange(item: any) {
    console.log('Toggle:', !item.status);
  }

  handleCancelItem(item: any) {
    console.log('Editar:', item);
  }

}
