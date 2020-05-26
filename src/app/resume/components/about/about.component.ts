import { Component, OnInit } from '@angular/core';

import { LanguageService } from 'src/app/core/services';
import { ResumeWords } from '../../consts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  get ResumeWords() {
    return this.languageService.getWords(ResumeWords);
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

}
