import { Component, OnInit } from '@angular/core';
import { Prizes } from './models/prizes.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss'],
})
export class PrizesComponent  implements OnInit {
  public prizes: Prizes[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPrizes();
  }

  async getPrizes() {
    await this.http
      .get<Prizes[]>(`${environment.apiUrl}/prizes`)
      .subscribe((data) => {
        this.prizes = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Código',
        property: 'code',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Nome do Produto',
        property: 'productName',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Categoria',
        property: 'category',
        isCustom: false,
        componentType: 'standard',
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
        label: 'Pontos',
        property: 'points',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Quantidade',
        property: 'quantity',
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
        componentType: 'actions',
        flexValue: 1
      },
    ],
  };

  handleToggleChange(item: any) {
    console.log('Toggle:', !item.status);
  }

  handleEditItem(item: any) {
    console.log('Editar:', item);
  }

  handleDeleteItem(item: any) {
    console.log('Deletar:', item);
  }

}
