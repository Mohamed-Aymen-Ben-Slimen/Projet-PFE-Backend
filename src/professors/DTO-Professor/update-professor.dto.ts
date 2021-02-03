import { DepartmentEnum } from '../../department/department.enum';

export class UpdateProfessorDto {
  firstname: string;
  lastname: string;
  email: string;
  nationality: string;
  phoneNumber: string;
  role: string;
  professorId: string;
  department: DepartmentEnum;
  title: string;
}
