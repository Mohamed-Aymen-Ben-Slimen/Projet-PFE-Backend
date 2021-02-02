import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SubjectType } from './enums/subject-type.enum';
import { SubjectStatus } from './enums/subject-status.enum';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Report } from '../report/model/report.model';
import { Superviser } from '../superviser/model/superviser.model';
import { Entreprise } from '../entreprise/model/entreprise.model';
import { Student } from 'src/students/student.model';


export type SubjectPfeDocument = SubjectPfe & Document;

@Schema()
export class SubjectPfe {
  @Prop({ required: true })
  subjectNumber: string;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  type: SubjectType;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  categories: string[];

  @Prop({ required: true })
  status: SubjectStatus;

  @Prop()
  administrationNotice: string;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Report' })
  report:  Report;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Student' })
  student: Student;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Superviser' })
  superviser:  Superviser;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Entreprise' })
  entreprise: Entreprise;
}

export const SubjectPfeSchema = SchemaFactory.createForClass(SubjectPfe);
