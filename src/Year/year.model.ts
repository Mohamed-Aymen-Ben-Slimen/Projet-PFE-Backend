import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type YearDocument = Year & Document;

@Schema()
export class Year {

  @Prop({
    required: true
  })
  year: string;

  @Prop({
    required: true
  })
  startDate: Date;

  @Prop({
    required: true
  })
  endDate: Date;

  @Prop({
    required: true
  })
  internshipsStartDate: Date;

  @Prop({
    required: true
  })
  internshipsEndDate: Date;
}

export const YearSchema = SchemaFactory.createForClass(Year);
