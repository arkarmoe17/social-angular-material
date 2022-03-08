import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/utils/_entities/language/language';
import { LanguageCreateComponent } from './language-create/language-create.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  displayedColumns: string[] = ['no', 'iso', 'name', 'description', 'locale', 'action'];
  languages: Language[] = []

  constructor(
    private dialog : MatDialog,
    private languageService: LanguageService
  ) { }


  //get language lists 
  getLanguageLists() {
    this.languageService.getLanguageLists().subscribe(res => {
      this.languages = res.data.languageList;
    })
  }

  createModal():void{
    const dialogRef = this.dialog.open(LanguageCreateComponent, {
      height: '500px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.reloadData();    
    });
  }

  reloadData(){
    this.getLanguageLists();
  }

  ngOnInit(): void {
    this.getLanguageLists();
  }

}
