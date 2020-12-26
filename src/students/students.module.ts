import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.model';
import { StudentsService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
