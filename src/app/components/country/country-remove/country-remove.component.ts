import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-country-remove',
  templateUrl: './country-remove.component.html',
  styleUrls: ['./country-remove.component.css']
})
export class CountryRemoveComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CountryRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService : CountryService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(){
    console.log("country id:{}",this.data.id);
    this.countryService.deleteCountry(this.data.id)
    .subscribe(res=>console.log("res:",res));
  }

  ngOnInit(): void {}

}
