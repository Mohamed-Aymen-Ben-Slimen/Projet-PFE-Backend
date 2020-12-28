import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MajorEnum } from './major.enum';

export type MajorDocument = Major & Document;

@Schema()
export class Major {

  @Prop({
    required: true
  })
  major: MajorEnum;
}

export const MajorSchema = SchemaFactory.createForClass(Major);
