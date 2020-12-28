import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClassEnum } from './class.enum';

export type ClassDocument = Class & Document;

@Schema()
export class Class {

  @Prop({
    required: true
  })
  class: ClassEnum;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
