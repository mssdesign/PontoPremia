import { Component, OnInit } from '@angular/core';
import { Bundle } from './models/bundle.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
})
export class BundlesComponent  implements OnInit {

  public bundles: Bundle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBundles();
  }

  async getBundles() {
    await this.http
      .get<Bundle[]>(`${environment.apiUrl}/bundles`)
      .subscribe((data) => {
        this.bundles = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Grupo',
        property: 'group',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'Marceneiros',
        property: 'carpenters',
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
        label: 'Status',
        property: 'status',
        isCustom: true,
        componentType: 'switch',
        flexValue: 1
      }
    ],
  };

  handleToggleChange(item: any) {
    console.log('Toggle:', !item.status);
  }

}
