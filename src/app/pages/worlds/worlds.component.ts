import { Component, OnInit } from '@angular/core';
import { World } from './models/world.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.scss'],
})
export class WorldsComponent  implements OnInit {

  public worlds: World[] = [];
  scoreMultipliers: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWorlds();
  }

  async getWorlds() {
    await this.http
      .get<World[]>(`${environment.apiUrl}/worlds`)
      .subscribe((data) => {
        this.worlds = data;
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
