import { SubjectType } from '../enums/subject-type.enum';
import { SubjectStatus } from '../enums/subject-status.enum';

export class CreatePfeDto {
  readonly subjectNumber: string;
  readonly title: string;
  readonly type: SubjectType;
  readonly description: string;
  readonly duration: number;
  readonly categories: string[];
  readonly status: SubjectStatus;
}
