import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
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
