import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppParamService } from '../../../services/app-param.service';
import { AppParamUpdateComponent } from '../app-param-update/app-param-update.component';

export interface AppParam {
  id: number,
  otpExpireMin: number,
  otpLength :number
  isDelete: boolean
}

@Component({
  selector: 'app-app-param-view',
  templateUrl: './app-param-view.component.html',
  styleUrls: ['./app-param-view.component.css']
})
export class AppParamViewComponent implements OnInit {

  displayedColumns: string[] = ['no', 'expired_min', 'otp_length','action'];
  parameters: AppParam[] = [];

  constructor(
    private appParamService : AppParamService,
    public dialog: MatDialog,
  ) { }


  //get all app-params
  getAllAppParameters(){
    return this.appParamService.getAllAppParameters().subscribe(
      res => {
        this.parameters = res.data.appParameterList;
        console.log("App parameters:{}",this.parameters);
      }
    );
  }

  editModal(param : AppParam){
    const dialogRef = this.dialog.open(AppParamUpdateComponent, {
      height: '400px',
      width: '450px',
      data: param,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadData();    
    });
  }

  reloadData(){
    this.getAllAppParameters();
  }


  ngOnInit(): void {
    this.getAllAppParameters();
  }

}
