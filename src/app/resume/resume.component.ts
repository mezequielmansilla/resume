import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EnumHelper } from '../core/enum-helper';
import { LanguagesEnum } from '../core/enums';
import { LanguageService } from '../core/services';
import { ResumeWords } from './consts';
import { ResumeRoutesEnum } from './enums/resume-routes.enum';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  get ResumeWords() {
    return this.languageService.getWords(ResumeWords);
  }
  readonly LanguagesEnum = LanguagesEnum;
  currentLanguage = environment.language;
  mobileQuery: MediaQueryList;
  get currentLanguage$() {
    return this.languageService.currentLanguage$;
  }

  fillerNav = EnumHelper.getValues(ResumeRoutesEnum);

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private languageService: LanguageService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit() {
  }

  itemClicked(snav) {
    if (this.mobileQuery.matches) {
      snav.close();
    }
  }

  setLanguage(language: LanguagesEnum) {
    this.languageService.setLanguage(language);
  }

  getName(routeEnum) {
    return this.ResumeWords[routeEnum];
  }

  getLink(url) {
    return `/${url}`;
  }

}
