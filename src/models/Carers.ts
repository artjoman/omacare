import { Gender } from './Gender';
import { AgeGroup } from './AgeGroup';
import { Service } from './Service';

export default interface Carers {
  title: string;
  price: number;
  description: string;
  services: Service[];
  gender?: Gender;
  ageGroup?: AgeGroup;
}
