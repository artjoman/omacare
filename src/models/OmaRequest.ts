import { Gender } from './Gender';
import { AgeGroup } from './AgeGroup';
import { Service } from './Service';

export default interface OmaRequest {
  id?: string;
  title: string;
  maxPrice: number;
  minPrice: number;
  description: string;
  services: Service[];
  gender: Gender;
  ageGroup: AgeGroup;
  image: string;
}
