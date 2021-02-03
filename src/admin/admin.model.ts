import { User } from '../schemas/user.schema';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin extends User {

}

export const AdminSchema = SchemaFactory.createForClass(Admin);
