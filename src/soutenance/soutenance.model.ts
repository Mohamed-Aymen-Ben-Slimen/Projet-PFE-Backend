import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Session } from '../session/session.model';
import * as mongoose from 'mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Room } from './enums/room.enum';
import { SubjectPfe } from '../pfe/sujet-pfe.model';
import { Professor } from '../professors/professor.model';

export type SoutenanceDocument = Soutenance & Document;

@Schema()
export class Soutenance {
  
  @Prop({ required: true })
  id: string;

  @Prop({ required: true, enum: [Room['2B6-2'], Room['2B6-3'], Room['2B6-4']] })
  room: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ required: true })
  dateTime: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SubjectPfe' })
  subjectPfe: SubjectPfe;

  @Prop([{ type: MongooseSchema.Types.ObjectId, rref: 'Professor' }])
  jury: Professor;

  @Prop([{ type: MongooseSchema.Types.ObjectId, rref: 'Professor' }])
  president: Professor;
}

export const SoutenanceSchema = SchemaFactory.createForClass(Soutenance);
