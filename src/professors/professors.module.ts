import { Module } from '@nestjs/common';
import { ProfessorsController } from './professors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Professor, ProfessorSchema } from './professor.model';
import { ProfessorsService } from './professors.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Professor.name, schema: ProfessorSchema }]),
  ],
  controllers: [ProfessorsController],
  providers: [ProfessorsService]
})
export class ProfessorsModule {}
