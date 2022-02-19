import { Component, OnInit } from '@angular/core';
import { RegisterLoginCount } from 'src/app/utils/_entities/dashboard/register_login_count';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  // ==== declaration
  countResults: RegisterLoginCount = {
    registerCount: 0,
    loginCount: 0
  };

  constructor(
    private dashboardService: DashboardService
  ) {}


  //get register and login count 
  getRegisterAndLoginUserCount() {
    this.dashboardService.getRegAndLoginUserCount().subscribe(res => {
      this.countResults = res.data;
      console.log("result:", this.countResults)
    });
  }




  ngOnInit(): void {
    this.getRegisterAndLoginUserCount();
  }
}
