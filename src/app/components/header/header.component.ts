import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

class MockElementRef extends ElementRef {
  constructor() { super(undefined); }
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;

}

export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard', icon: 'ni-bullet-list-67 text-brand-color', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: '', class: '' },
  { path: '/country', title: 'Country', icon: '', class: '' },
  { path: '/app-param', title: 'App Parameter', icon: '', class: '' },
  { path: '/security-question', title: 'Security Question', icon: '', class: '' },
  { path: '/language', title: 'Language', icon: '', class: '' },

];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appName = "Social Admin";

  showUserSetting = false;
  public menuItems: any[] | undefined;

  constructor(private authService: AuthService) {
   }

  ngOnInit(): void { 
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log("menu Item:{}",this.menuItems);
  }

  logout() {
    this.showUserSetting = false;
    this.authService.logout();
  }

}
