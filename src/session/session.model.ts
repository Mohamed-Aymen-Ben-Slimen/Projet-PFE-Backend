import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Major } from '../major/major.model';
import { Year } from '../Year/year.model';

export type SessionDocument = Session & Document;

@Schema()
export class Session {

  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: true
  })
  startDate: Date;

  @Prop({
    required: true
  })
  endDate: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Major' }] })
  major: Major;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Year' }] })
  year: Year;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
