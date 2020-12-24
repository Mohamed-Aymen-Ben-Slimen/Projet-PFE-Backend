import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
})
export class StudentsModule {}
