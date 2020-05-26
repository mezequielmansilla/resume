import { LanguagesEnum } from 'src/app/core/enums';

export interface IEnvironment {
  production: boolean;
  language: LanguagesEnum;
}
