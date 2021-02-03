import { User } from '../schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student extends User {
  @Prop({ required: true })
  studentNumber: string;

  @Prop({
    required: true,
    enum: ['GL', 'RT', 'IIA', 'IMI', 'CH', 'BIO'],
  })
  major: string;

  @Prop({ required: true, min: 0, max: 5 })
  level: number;

  @Prop({ required: true, enum: ['engineer', 'technician'] })
  diploma: string;

  @Prop()
  birthDate: Date;

  @Prop()
  birthPlace: string;

  @Prop()
  photo: string;

  @Prop()
  CV: string;

  @Prop()
  active: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
