import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export const UserSchema = new Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     username: Number,
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     CIN: { type: Number, required: true },
//     nationality: String,
//     phoneNumber: String,
//     role: {
//       type: String,
//       required: true,
//       enum: ['ADMIN', 'STUDENT', 'PROFESSOR'],
//     },
//   },
//   { collection: 'users', discriminatorKey: 'role' },
// );

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
