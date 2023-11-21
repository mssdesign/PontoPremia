import { Subject, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  currentRoute: string = '';
  menuItems: any[] = [];
  isMenuMinimized = false;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute, private menuService: MenuService) {
    this.menuItems = menuService.menuItems;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/')[1] || '';
        if (!this.currentRoute) {
          this.currentRoute = this.menuItems[0].value;
          this.navigateTo(this.currentRoute);
        }
      }
    });
  }

  ngOnInit() {
    this.subscription = this.menuService.menuState$.subscribe(
      (isMinimized) => (this.isMenuMinimized = isMinimized)
    );
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.currentRoute = route;
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
