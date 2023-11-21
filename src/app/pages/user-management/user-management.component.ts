import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { TableConfig } from '../../components/table-data/generic-table/models/table-interfaces.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent  implements OnInit {

  public users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    await this.http
      .get<User[]>(`${environment.apiUrl}/activeUsers`)
      .subscribe((data) => {
        this.users = data;
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
        label: 'E-mail',
        property: 'email',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Cargo',
        property: 'position',
        isCustom: false,
        componentType: 'standard',
        flexValue: 1
      },
      {
        label: 'Permissão',
        property: 'permission',
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
