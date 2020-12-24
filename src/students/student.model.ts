import { Document } from 'mongoose';
import * as extendSchema from 'mongoose-extend-schema';
import { UserSchema } from '../schemas/user.schema';

export const StudentSchema = extendSchema(UserSchema, {
  studentNumber: { type: String, required: true },
  major: {
    type: String,
    required: true,
    enum: ['GL', 'RT', 'MPI', 'IIA', 'IMI', 'CH', 'BIO', 'CBA'],
  },
  level: { type: Number, required: true, min: 0, max: 5 },
  group: Number,
  diploma: { type: String, required: true, enum: ['engineer', 'technician'] },
  birthDate: Date,
  birthPlace: String,
  photo: Buffer,
  CV: Buffer,
  active: Boolean,
});

export interface Student extends Document {
  firstName: string;
  lastName: string;
  username: number;
  email: string;
  password: string;
  CIN: number;
  nationality: string;
  phoneNumber: string;
  role: string;
  studentNumber: string;
  major: string;
  level: number;
  group: number;
  diploma: string;
  birthDate: Date;
  birthPlace: string;
  photo: string;
  CV: string;
  active: boolean;
}
