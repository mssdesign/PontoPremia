import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Auth/auth.service';
import { MenuService } from '../main-menu/menu.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  public message: string = '';
  public pageTitle: string = '';
  public showMessage: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.pageTitle = this.menuService.getLabel(url[0].path);

      if (url[0].path === 'dashboard') {
        this.showMessage = true;
        this.message = 'Bem vindo ao';
      } else {
        this.showMessage = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }

}
