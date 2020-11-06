import { CareType } from './careType';

export interface OmaRequest {
  title: string;
  maxPrice: string;
  minPrice: string;
  careTypes: CareType[];
  description: string;
}
