import { Component, OnInit } from '@angular/core';

import { LanguageService } from 'src/app/core/services';
import { ResumeWords } from '../../consts';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  get ResumeWords() {
    return this.languageService.getWords(ResumeWords);
  }
  readonly works = this.ResumeWords.WORKS_LIST;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

}
