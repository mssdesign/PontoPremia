import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from './components/main-menu/menu.service';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMenuMinimized = false;
  isLoggedIn = false; 
  private subscription: Subscription = new Subscription();

  constructor(private menuService: MenuService, private authService: AuthService) {}

  ngOnInit() {
    this.subscription.add(this.menuService.menuState$.subscribe(
      (isMinimized) => (this.isMenuMinimized = isMinimized)
    ));

    this.subscription.add(this.authService.currentUser.subscribe(
      (user) => {
        this.isLoggedIn = !!user;
      }
    ));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
