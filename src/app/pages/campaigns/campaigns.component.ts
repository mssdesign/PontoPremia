import { Component, OnInit } from '@angular/core';
import { Campaign } from './models/campaign.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent  implements OnInit {
  public campaigns: Campaign[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCampaigns();
  }

  async getCampaigns() {
    await this.http
      .get<Campaign[]>(`${environment.apiUrl}/campaigns`)
      .subscribe((data) => {
        this.campaigns = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Nome',
        property: 'name',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Período de Tempo',
        property: 'timePeriod',
        isCustom: true,
        componentType: 'count',
        flexValue: 1
      },
      {
        label: 'Produtos Participantes',
        property: 'products',
        isCustom: true,
        componentType: 'count',
        flexValue: 1
      },
      {
        label: 'Categorias Participantes',
        property: 'categories',
        isCustom: true,
        componentType: 'count',
        flexValue: 1
      },
      {
        label: 'Mundos Participantes',
        property: 'worlds',
        isCustom: true,
        componentType: 'count',
        flexValue: 1
      },
      {
        label: 'Região',
        property: 'region',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Filiais',
        property: 'branches',
        isCustom: true,
        componentType: 'count',
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
        flexValue: 2
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
