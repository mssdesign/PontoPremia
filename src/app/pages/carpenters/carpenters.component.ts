import { Component, OnInit } from '@angular/core';
import { Carpenter } from './models/carpenter.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss'],
})
export class CarpentersComponent  implements OnInit {

  public carpenters: Carpenter[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCarpenters();
  }

  async getCarpenters() {
    await this.http
      .get<Carpenter[]>(`${environment.apiUrl}/carpenters`)
      .subscribe((data) => {
        this.carpenters = data;
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
        label: 'CNPJ / CPF',
        property: 'identifier',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Endereço',
        property: 'address',
        isCustom: false,
        componentType: 'standard',
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
        label: 'Total de Pontos',
        property: 'totalPoints',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Saldo de Pontos',
        property: 'balancePoints',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Situação',
        property: 'situation',
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
        componentType: 'edit',
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

}
