import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { ColumnSwitchComponent } from './table-data/column-type/column-switch/column-switch.component';
import { ColumnSelectorComponent } from './table-data/column-type/column-selector/column-selector.component';
import { GenericTableComponent } from './table-data/generic-table/generic-table.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { MiniGenericTableComponent } from './table-data/mini-generic-table/mini-generic-table.component';
import { ColumnActionsComponent } from './table-data/column-type/column-actions/column-actions.component';
import { ColumnApproveCancelComponent } from './table-data/column-type/column-approve-cancel/column-approve-cancel.component';
import { ColumnEditComponent } from './table-data/column-type/column-edit/column-edit.component';
import { ColumnDateComponent } from './table-data/column-type/column-date/column-date.component';
import { CountComponent } from './table-data/column-type/column-count/column-count.component';
import { BundlesComponent } from '../pages/bundles/bundles.component';
import { GiftsComponent } from '../pages/gifts/gifts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { CampaignsComponent } from '../pages/campaigns/campaigns.component';
import { ColumnCancelComponent } from './table-data/column-type/column-cancel/column-cancel.component';
import { ColumnMoneyComponent } from './table-data/column-type/column-money/column-money.component';
import { ColumnCnpjCpfComponent } from './table-data/column-type/column-cnpj-cpf/column-cnpj-cpf.component';
import { ProductsComponent } from '../pages/products/products.component';
import { LogsComponent } from '../pages/logs/logs.component';
import { BranchesComponent } from '../pages/branches/branches.component';
import { UserManagementComponent } from '../pages/user-management/user-management.component'
import { CategoriesComponent } from '../pages/categories/categories.component';
import { WorldsComponent } from '../pages/worlds/worlds.component';
import { HistoriesComponent } from '../pages/histories/histories.component';
import { ScoresComponent } from '../pages/scores/scores.component';
import { PrizesComponent } from '../pages/prizes/prizes.component';
import { VouchersComponent } from '../pages/vouchers/vouchers.component';
import { CarpentersComponent } from '../pages/carpenters/carpenters.component';
import { IonicModule } from '@ionic/angular';
import { MainHeaderComponent } from './main-header/main-header.component';

const COMPONENTS = [
  MainMenuComponent,
  GenericTableComponent,
  ColumnActionsComponent,
  ColumnCancelComponent,
  ChartCardComponent,
  ColumnCnpjCpfComponent,
  ProductsComponent,
  DashboardComponent,
  LogsComponent,
  CampaignsComponent,
  MiniGenericTableComponent,
  VouchersComponent,
  BranchesComponent,
  UserManagementComponent,
  CountComponent,
  ColumnMoneyComponent,
  ColumnDateComponent,
  BundlesComponent,
  HistoriesComponent,
  ColumnApproveCancelComponent,
  ColumnEditComponent,
  GiftsComponent,
  ColumnSelectorComponent,
  CategoriesComponent,
  WorldsComponent,
  ScoresComponent,
  CarpentersComponent,
  PrizesComponent,
  ColumnSwitchComponent,
  MainHeaderComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule,
    IonicModule
  ]
})
export class ComponentsModule { }
