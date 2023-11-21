import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuState = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuState.asObservable();

  constructor() { }

  menuItems = [
    { value: 'dashboard', icon: 'grid-outline', label: 'Dashboard' },
    { value: 'products', icon: 'bag-outline', label: 'Produtos' },
    {
      value: 'categories',
      icon: 'file-tray-stacked-outline',
      label: 'Categorias',
    },
    { value: 'prizes', icon: 'trophy-outline', label: 'Prêmios' },
    { value: 'scores', icon: 'diamond-outline', label: 'Pontuações' },
    { value: 'campaigns', icon: 'megaphone-outline', label: 'Campanhas' },
    { value: 'worlds', icon: 'planet-outline', label: 'Mundos' },
    { value: 'gifts', icon: 'gift-outline', label: 'Resgates' },
    {
      value: 'userManagement',
      icon: 'people-outline',
      label: 'Gestão de usuários',
    },
    { value: 'branches', icon: 'storefront-outline', label: 'Filiais' },
    { value: 'logs', icon: 'list-outline', label: 'Logs' },
    { value: 'carpenters', icon: 'hammer-outline', label: 'Marceneiros' },
    { value: 'bundles', icon: 'leaf-outline', label: 'Pencas' },
    { value: 'vouchers', icon: 'pricetags-outline', label: 'Vouchers' },
    { value: 'histories', icon: 'time-outline', label: 'Histórico' },
  ];

  getLabel(route: string): string {
    const menuItem = this.menuItems.find(item => item.value === route);
    return menuItem ? menuItem.label : '';
  }

  toggleMenu() {
    this.menuState.next(!this.menuState.value);
  }

}
