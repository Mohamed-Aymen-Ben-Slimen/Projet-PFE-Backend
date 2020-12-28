import { Major } from '../../major/major.model';
import { Year } from '../../Year/year.model';

export class CreateSessionDto {
  name: string;
  startDate: Date;
  endDate: Date;
  major: Major;
  year: Year;
}
