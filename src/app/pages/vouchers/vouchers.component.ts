import { Component, OnInit } from '@angular/core';
import { Voucher } from './models/voucher.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss'],
})
export class VouchersComponent  implements OnInit {

  public vouchers: Voucher[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getVouchers();
  }

  async getVouchers() {
    await this.http
      .get<Voucher[]>(`${environment.apiUrl}/vouchers`)
      .subscribe((data) => {
        this.vouchers = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Nº do Vouncher',
        property: 'voucherNumber',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Descrição do produto',
        property: 'productDescription',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Data do Resgate',
        property: 'redemptionDate',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Cancelamento',
        property: 'cancellation',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Data do pedido',
        property: 'orderDate',
        isCustom: true,
        componentType: 'date',
        flexValue: 1
      },
      {
        label: 'Data Retorno Leo',
        property: 'returnDateLeo',
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
    ],
  };

  handleApproveItem(item: any) {
    console.log('Aprovado:', item);
  }

  handleCancelItem(item: any) {
    console.log('Cancelar:', item);
  }

}
