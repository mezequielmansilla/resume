import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormNamesEnum } from '../../enums';

export class ContactFormBuilder {
  static createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      [ContactFormNamesEnum.NAME]: fb.control('', [Validators.required]),
      [ContactFormNamesEnum.SUBJECT]: fb.control('Web Resume', [Validators.required]),
      [ContactFormNamesEnum.MESSAGE]: fb.control('', [Validators.required]),
    });
  }
}
