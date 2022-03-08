import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/utils/_entities/language/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  displayedColumns: string[] = ['no', 'iso', 'name', 'description', 'locale', 'action'];
  languages: Language[] = []

  constructor(
    private languageService: LanguageService
  ) { }


  //get language lists 
  getLanguageLists() {
    this.languageService.getLanguageLists().subscribe(res => {
      this.languages = res.data.languageList;
    })
  }


  ngOnInit(): void {
    this.getLanguageLists();
  }

}
