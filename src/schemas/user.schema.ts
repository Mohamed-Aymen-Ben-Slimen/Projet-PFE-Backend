import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;


@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;
  
  @Prop({ required: true })
  lastName: string;
  
  @Prop({ required: true})
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  CIN: number;

  @Prop()
  nationality: string;

  @Prop()
  phoneNumber: string;

  @Prop({ required: true, enum: ['ADMIN', 'STUDENT', 'PROFESSOR'] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
