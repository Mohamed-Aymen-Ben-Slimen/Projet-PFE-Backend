import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Document } from 'mongoose';
import { DepartmentEnum } from '../department/department.enum';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor extends User {
  @Prop({ required: true })
  professorId: string;

  @Prop({ required: true , enum: [DepartmentEnum.CB, DepartmentEnum.MI, DepartmentEnum.PI, DepartmentEnum.SSLF] })
  department: DepartmentEnum;

  @Prop({required: true})
  title: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
