import { Professor } from 'src/professors/professor.model';
import { Supervisor } from 'src/supervisor/model/supervisor.model';
import { SubjectType } from '../enums/subject-type.enum';

export class UpdatePfeDto {
  readonly title: string;
  readonly type: SubjectType;
  readonly description: string;
  readonly duration: number;
  readonly categories: string[];
  readonly professor: Professor;
  readonly supervisor: Supervisor;
}
