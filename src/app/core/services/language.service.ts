import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LanguagesEnum } from '../enums';
import { IWords } from '../interfaces';

const KEY = 'ENM.current_language';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<LanguagesEnum>(environment.language);
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  setLanguage(language: LanguagesEnum) {
    localStorage.setItem(KEY, language);
    this.currentLanguageSubject.next(language);
  }

  private getLanguage(): LanguagesEnum {
    return this.currentLanguageSubject.value;
  }

  getWords<T>(words: IWords<T>): T {
    return words[this.getLanguage()];
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Client only code (NgUniversal)
    if (isPlatformBrowser(this.platformId)) {
      this.setLanguage(localStorage.getItem(KEY) as LanguagesEnum || environment.language);
    }
  }
}
