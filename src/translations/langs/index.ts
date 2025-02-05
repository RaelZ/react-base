import { us } from './us';
import { br } from './br';

export { us, br };

interface ILangs {
  flag: string;
  code: string;
  label: string;
}

export const languages: ILangs[] = [
  {
    flag: 'BR',
    code: 'br',
    label: 'br',
  },
  {
    flag: 'US',
    code: 'us',
    label: 'us',
  },
];
