import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: Number,
    email: { type: String, required: true },
    password: { type: String, required: true },
    CIN: { type: Number, required: true },
    nationality: String,
    phoneNumber: String,
    role: {
      type: String,
      required: true,
      enum: ['ADMIN', 'STUDENT', 'PROFESSOR'],
    },
  },
  { collection: 'users', discriminatorKey: 'role' },
);
