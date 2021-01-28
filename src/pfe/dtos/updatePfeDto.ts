import { SubjectType } from '../enums/subject-type.enum';

export class UpdatePfeDto {
  readonly title: string;
  readonly type: SubjectType;
  readonly description: string;
  readonly duration: number;
  readonly categories: string[];
}
