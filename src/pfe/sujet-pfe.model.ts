import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {SubjectType} from './enums/subject-type.enum';
import {SubjectStatus} from './enums/subject-status.enum';
import { Document } from 'mongoose';

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

  @Prop({ required: true})
  description: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true})
  categories: string[];

  @Prop({ required: true})
  status: SubjectStatus;
}

export const SubjectPfeSchema = SchemaFactory.createForClass(SubjectPfe);
