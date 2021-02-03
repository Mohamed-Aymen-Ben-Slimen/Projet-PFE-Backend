import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupervisorDocument = Supervisor & Document;

@Schema()
export class Supervisor {

  @Prop({ required: true })
  id: string;

  @Prop({
    required: true,
  })
  firstname: string;

  @Prop({
    required: true,
  })
  lastname: string;

  @Prop({ required: true})
  email: string;

  @Prop()
  number: number;

}

export const SupervisorSchema = SchemaFactory.createForClass(Supervisor);
