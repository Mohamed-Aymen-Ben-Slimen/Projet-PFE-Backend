import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DepartmentEnum } from './department.enum';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {

  @Prop({
    required: true
  })
  department: DepartmentEnum;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
