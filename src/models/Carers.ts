import { Gender } from './Gender';
import { AgeGroup } from './AgeGroup';
import { Service } from './Service';

export default interface Carer {
  id: string,
  title: string;
  price: number;
  description: string;
  services: Service[];
  image?: string;
  gender?: Gender;
  ageGroup?: AgeGroup;
}
