import { Component, OnInit } from '@angular/core';
import { Gift } from './models/gift.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
})
export class GiftsComponent  implements OnInit {

  public gifts: Gift[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGifts();
  }

  async getGifts() {
    await this.http
      .get<Gift[]>(`${environment.apiUrl}/gifts`)
      .subscribe((data) => {
        this.gifts = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'ID',
        property: 'id',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Vendedor',
        property: 'seller',
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
        label: 'Cidade',
        property: 'city',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Produto Resgatado',
        property: 'rescuedProduct',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Qtde',
        property: 'quantity',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Saldo no Ato',
        property: 'balanceAtTime',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Pontos Utilizados',
        property: 'pointsUsed',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Status',
        property: 'status',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Data do Resgate',
        property: 'rescueDate',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Previsão de Entrega',
        property: 'deliveryEstimate',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Data da Entrega',
        property: 'deliveryDate',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Ações',
        property: 'approved',
        isCustom: true,
        componentType: 'approveOrCancel',
        flexValue: 2
      },
      {
        label: 'Alterar Status',
        property: 'edit',
        isCustom: true,
        componentType: 'edit',
        flexValue: 1
      },
    ],
  };

  handleApproveItem(item: any) {
    console.log('Aprovado:', item);
  }

  handleCancelItem(item: any) {
    console.log('Cancelar:', item);
  }

  handleEditItem(item: any) {
    console.log('Editar:', item);
  }

}
