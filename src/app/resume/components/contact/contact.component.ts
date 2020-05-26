import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LanguageService } from 'src/app/core/services';
import { ResumeWords } from '../../consts';
import { ContactFormNamesEnum } from '../../enums';
import { ContactFormBuilder } from './contact.form-builder';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  get ResumeWords() {
    return this.languageService.getWords(ResumeWords);
  }
  readonly ContactFormNamesEnum = ContactFormNamesEnum;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private languageService: LanguageService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = ContactFormBuilder.createForm(this.fb);
  }

  sendMessage() {
    const name = this.contactForm.get(ContactFormNamesEnum.NAME).value;
    const subject = this.contactForm.get(ContactFormNamesEnum.SUBJECT).value;
    const message = this.contactForm.get(ContactFormNamesEnum.MESSAGE).value;
    const url = `mailto:mezequielmansilla@gmail.com?subject=${subject}&body=${message}
      <br><br>${this.ResumeWords.REGARDS}.<br><br>${name}`;
    window.open(url);
  }

}
