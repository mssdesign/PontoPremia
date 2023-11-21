import { Component, OnInit } from '@angular/core';
import { Product } from './models/products.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    await this.http
      .get<Product[]>(`${environment.apiUrl}/products`)
      .subscribe((data) => {
        this.products = data;
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
        label: 'Produto',
        property: 'product',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Mundo',
        property: 'world',
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
        label: 'Pontos',
        property: 'points',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Valor',
        property: 'value',
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
