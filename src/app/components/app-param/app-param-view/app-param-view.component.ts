import { Component, OnInit } from '@angular/core';
import { AppParamService } from 'src/app/utils/_services/app-param.service';

export interface AppParam {
  id: number,
  otpExpireMin: number,
  otpLength :number
  isDelete: boolean
}

@Component({
  selector: 'app-app-param-view',
  templateUrl: './app-param-view.component.html',
  styleUrls: ['./app-param-view.component.sass']
})
export class AppParamViewComponent implements OnInit {
  parameters: AppParam[] = [];

  constructor(
    private appParamService : AppParamService,
  ) { }


  //get all app-params
  getAllAppParameters(){
    return this.appParamService.getAllAppParameters().subscribe(
      res => {
        this.parameters = res.data;
        console.log("App parameters:{}",this.parameters);
      }
    );
  }

  ngOnInit(): void {
    this.getAllAppParameters();
  }

}
