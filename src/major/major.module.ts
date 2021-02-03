import { Module } from '@nestjs/common';
import { MajorService } from './major.service';
import { MajorController } from './major.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../students/student.model';
import { Major, MajorSchema } from './major.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Major.name, schema: MajorSchema }])
  ],
  providers: [MajorService],
  controllers: [MajorController]
})
export class MajorModule {}
