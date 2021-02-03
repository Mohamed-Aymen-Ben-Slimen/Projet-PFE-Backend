import { SubjectType } from '../enums/subject-type.enum';
import { Student } from 'src/students/student.model';
import { Entreprise } from 'src/entreprise/model/entreprise.model';
import { Supervisor } from 'src/supervisor/model/supervisor.model';

export class CreatePfeDto {
  readonly subjectNumber: string;
  readonly title: string;
  readonly type: SubjectType;
  readonly description: string;
  readonly duration: number;
  readonly categories: string[];
  readonly student: Student;
  readonly entreprise: Entreprise;
  readonly supervisor: Supervisor;
}
