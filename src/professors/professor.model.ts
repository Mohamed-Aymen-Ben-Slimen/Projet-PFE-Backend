import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Department } from '../schemas/enums/department.enum';

export class Professor extends User {
  @Prop({ required: true })
  professorId: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true , enum: [Department.CB, Department.MI, Department.PI, Department.SSLF] })
  title: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);