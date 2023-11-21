import { Component, OnInit } from '@angular/core';
import { Branch } from './models/branch.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent  implements OnInit {

  public branches: Branch[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBranches();
  }

  async getBranches() {
    await this.http
      .get<Branch[]>(`${environment.apiUrl}/branches`)
      .subscribe((data) => {
        this.branches = data;
      });
  }

  tableConfig: TableConfig = {
    columns: [
      {
        label: 'Razão Social',
        property: 'businessName',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1        
      },
      {
        label: 'CNPJ',
        property: 'identifier',
        isCustom: true,
        componentType: 'identifier',
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
