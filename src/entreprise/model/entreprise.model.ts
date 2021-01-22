import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntrepriseDocument = Entreprise & Document;

@Schema()
export class Entreprise {

  @Prop({ required: true })
  id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  field: string;

  @Prop({ required: true})
  country: string;

  @Prop()
  website: string;

}

export const EntrepriseSchema = SchemaFactory.createForClass(Entreprise);
