import { Document } from 'mongoose';
import { User } from '../schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export const StudentSchema = extendSchema(UserSchema, {
//   studentNumber: { type: String, required: true },
//   major: {
//     type: String,
//     required: true,
//     enum: ['GL', 'RT', 'MPI', 'IIA', 'IMI', 'CH', 'BIO', 'CBA'],
//   },
//   level: { type: Number, required: true, min: 0, max: 5 },
//   group: Number,
//   diploma: { type: String, required: true, enum: ['engineer', 'technician'] },
//   birthDate: Date,
//   birthPlace: String,
//   photo: Buffer,
//   CV: Buffer,
//   active: Boolean,
// });

// export interface Student extends Document {
//   firstName: string;
//   lastName: string;
//   username: number;
//   email: string;
//   password: string;
//   CIN: number;
//   nationality: string;
//   phoneNumber: string;
//   role: string;
//   studentNumber: string;
//   major: string;
//   level: number;
//   group: number;
//   diploma: string;
//   birthDate: Date;
//   birthPlace: string;
//   photo: string;
//   CV: string;
//   active: boolean;
// }

export class Student extends User {
  @Prop({ required: true })
  studentNumber: string;

  @Prop({ required: true })
  major: string;

  @Prop({ required: true })
  level: number;

  @Prop()
  group: number;

  @Prop({ required: true, enum: ['engineer', 'technician'] })
  diploma: string;

  @Prop()
  birthDate: Date;

  @Prop()
  birthPlace: string;

  @Prop()
  photo: string;

  @Prop()
  CV: string;

  @Prop()
  active: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
