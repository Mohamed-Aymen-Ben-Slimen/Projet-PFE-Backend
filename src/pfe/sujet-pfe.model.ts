import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SubjectType } from './enums/subject-type.enum';
import { SubjectStatus } from './enums/subject-status.enum';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Report } from '../report/model/report.model';
import { Entreprise } from '../entreprise/model/entreprise.model';
import { Student } from 'src/students/student.model';
import { Professor } from 'src/professors/professor.model';
import { Supervisor } from 'src/supervisor/model/supervisor.model';

export type SubjectPfeDocument = SubjectPfe & Document;

@Schema()
export class SubjectPfe {
  @Prop()
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

  @Prop({ default: SubjectStatus.PENDING, required: true })
  status: SubjectStatus;

  @Prop()
  administrationNotice: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Report' })
  report: Report;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Student', required: true })
  student: Student;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Professor' })
  professor: Professor;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Supervisor' })
  supervisor: Supervisor;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Entreprise',
    required: true,
  })
  entreprise: Entreprise;

  @Prop({ default: false })
  professorRequested: boolean;
}

export const SubjectPfeSchema = SchemaFactory.createForClass(SubjectPfe);
