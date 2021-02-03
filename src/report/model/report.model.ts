import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {

  @Prop({ required: true })
  id: string;

  @Prop({
    required: true,
  })
  path: string;

  @Prop({
    required: true,
  })
  remarks: string;

  @Prop({ required: true})
  valid: boolean;

  @Prop({ required: true })
  note: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
