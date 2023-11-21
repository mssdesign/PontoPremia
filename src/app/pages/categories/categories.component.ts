import { Component, OnInit } from '@angular/core';
import { Category } from './models/category.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {
  public categories: Category[] = [];
  scoreMultipliers: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    await this.http
      .get<Category[]>(`${environment.apiUrl}/categories`)
      .subscribe((data) => {
        this.categories = data;
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
        label: 'ID Mundo',
        property: 'worldId',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Name',
        property: 'name',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Multiplicador de Pontos',
        property: 'scoreMultiplier',
        isCustom: true,
        componentType: 'selector',
        flexValue: 1
      },
    ],
  };

  updateValue(event: { selectedValue: number, item: any }) {
    console.log('item: ', event.item);
    console.log('valor: ', event.selectedValue);
  }

}
