import { Component, OnInit } from '@angular/core';

import { LanguageService } from 'src/app/core/services';
import { ResumeWords } from '../../consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  get ResumeWords() {
    return this.languageService.getWords(ResumeWords);
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

}
