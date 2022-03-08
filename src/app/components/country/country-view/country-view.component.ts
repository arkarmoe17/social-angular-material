import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from 'src/app/utils/_entities/country/country';
import { CountryService } from '../../../services/country.service';
import { CountryCreateComponent } from '../country-create/country-create.component';
import { CountryRemoveComponent } from '../country-remove/country-remove.component';
import { CountryUpdateComponent } from '../country-update/country-update.component';

@Component({
  selector: 'app-country-view',
  styleUrls: ['country-view.component.css'],
  templateUrl: './country-view.component.html',
})
export class CountryViewComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'code',"nick","prefix","flag_url", 'action'];
  countries: Country[] = [];
  showCountryModal = false;
  showUpdateModal = false;

  constructor(
    public dialog: MatDialog,
    private countryService: CountryService,
  ) {}

  createModal():void{
    const dialogRef = this.dialog.open(CountryCreateComponent, {
      height: '600px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.reloadData();    
    });
  }

  deleteModal(id:number): void {
    const dialogRef = this.dialog.open(CountryRemoveComponent, {
      height: '200px',
      width: '400px',
      data: {id:id},
    });
    dialogRef.afterClosed().subscribe(res => { 
      this.reloadData();    
    });
  }

  editModal(country : Country){
    const dialogRef = this.dialog.open(CountryUpdateComponent, {
      height: '600px',
      width: '600px',
      data: country,
    });
    dialogRef.afterClosed().subscribe(res => {
      this.reloadData();    
    });
  }
  
  getCountryLists() {
    return this.countryService.getCountryLists().subscribe(res => {
      this.countries = res.data.countryInfoList;
      console.log("country data:", this.countries);
    });
  }

  reloadData() {
    this.getCountryLists();
  }

  ngOnInit(): void {
    this.getCountryLists();
  }
 
}


