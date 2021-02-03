import { Module } from '@nestjs/common';
import { PfeController } from './pfe.controller';
import { PfeService } from './pfe.service';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectPfe, SubjectPfeSchema } from './sujet-pfe.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SubjectPfe.name, schema: SubjectPfeSchema }]),
  ],
  controllers: [PfeController],
  providers: [PfeService]
})
export class PfeModule {}
