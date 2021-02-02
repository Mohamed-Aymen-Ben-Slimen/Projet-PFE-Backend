import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Professor, ProfessorDocument } from './professor.model';
import { CreateProfessorDto } from './DTO-Professor/create-professor.dto';
import { UpdateProfessorDto } from './DTO-Professor/update-professor.dto';
import { Student } from '../students/student.model';


@Injectable()
export class ProfessorsService {
  constructor(@InjectModel(Professor.name) private readonly professorModel : Model<ProfessorDocument>) {}

  async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    console.log(new this.professorModel());

    const createdProfessor = new this.professorModel(createProfessorDto);
    console.log(createProfessorDto);
    return createdProfessor.save();
  }

  async findAll(): Promise<Professor[]> {
    return this.professorModel.find().exec();
  }

  async findById(id): Promise<Professor> {
    return await this.professorModel.findById(id).exec();
  }

  async findByEmail(email): Promise<Professor> {
    return await this.professorModel.findOne({ email }).exec();
  }

  async update(id, updateProfDto: UpdateProfessorDto): Promise<any> {
    return await this.professorModel.findByIdAndUpdate(id, updateProfDto, { new: true });
  }
  async delete(id): Promise<any> {
    return await this.professorModel.findByIdAndRemove(id);
  }
}
