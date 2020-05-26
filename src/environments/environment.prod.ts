import { IEnvironment } from './environment.interface';
import { LanguagesEnum } from 'src/app/core/enums';

export const environment: IEnvironment = {
  production: true,
  language: LanguagesEnum.EN,
};
