import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Room } from '../schemas/enums/rooms.enum';
import { Session } from '../session/session.model';
import * as mongoose from 'mongoose';

export type SoutenanceDocument = Soutenance & Document;

@Schema()
export class Soutenance {
  @Prop({
    required: true,
  })
  dateTime: Date;

  @Prop({ required: true, enum: [Room['2B6-2'], Room['2B6-3'], Room['2B6-4']] })
  room: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;
}

export const SoutenanceSchema = SchemaFactory.createForClass(Soutenance);
