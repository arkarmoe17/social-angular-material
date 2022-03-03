import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{
  events: string[] = [];
  opened = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}