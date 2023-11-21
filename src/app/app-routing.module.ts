import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LogsComponent } from './pages/logs/logs.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HistoriesComponent } from './pages/histories/histories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from '../app/pages/reset-password/reset-password.component';
import { BundlesComponent } from './pages/bundles/bundles.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { WorldsComponent } from './pages/worlds/worlds.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { PrizesComponent } from './pages/prizes/prizes.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { CarpentersComponent } from './pages/carpenters/carpenters.component';
import { AuthGuard } from '../Auth/auth.guard';
import { NoAuthGuard } from '../Auth/no-auth-guard.service';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'prizes',
    component: PrizesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'scores',
    component: ScoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gifts',
    component: GiftsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userManagement',
    component: UserManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'branches',
    component: BranchesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'worlds',
    component: WorldsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logs',
    component: LogsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'carpenters',
    component: CarpentersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bundles',
    component: BundlesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vouchers',
    component: VouchersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'histories',
    component: HistoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'campaigns',
    component: CampaignsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
