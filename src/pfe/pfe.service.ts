import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { SubjectPfe, SubjectPfeDocument } from './sujet-pfe.model';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePfeDto } from './dtos/createPfeDto';
import { UpdatePfeDto } from './dtos/updatePfeDto';
import { SubjectStatus } from './enums/subject-status.enum';
import { ProfessorsService } from 'src/professors/professors.service';
import { StudentsService } from 'src/students/students.service';

@Injectable()
export class PfeService {
  constructor(
    @InjectModel(SubjectPfe.name)
    private readonly pfeModel: Model<SubjectPfeDocument>,
    private readonly professorsService: ProfessorsService,
    private readonly studentsService: StudentsService,
  ) {}

  async create(createPfeDto: CreatePfeDto): Promise<SubjectPfe> {
    console.log(new this.pfeModel());
    const createdPfe = new this.pfeModel(createPfeDto);
    console.log(createPfeDto);
    return createdPfe.save();
  }

  async findAll(): Promise<SubjectPfe[]> {
    return this.pfeModel
      .find()
      .populate(['student', 'entreprise', 'supervisor', 'professor'])
      .exec();
  }

  async findWithStatus(status: SubjectStatus): Promise<SubjectPfe[]> {
    return this.pfeModel
      .find({ status: status })
      .populate(['student', 'entreprise', 'supervisor', 'professor'])
      .exec();
  }

  async findById(id): Promise<SubjectPfe> {
    return await this.pfeModel
      .findById(id)
      .populate(['student', 'entreprise', 'supervisor', 'professor'])
      .exec();
  }

  async findByStudentId(id: ObjectId): Promise<SubjectPfe> {
    const student = await this.studentsService.findById(id);
    return await this.pfeModel
      .findOne({ student: student })
      .populate(['student', 'entreprise', 'supervisor', 'professor'])
      .exec();
  }

  async findByRequestedProfessorId(id: ObjectId): Promise<SubjectPfe[]> {
    const requestedProfessor = await this.professorsService.findById(id);
    return await this.pfeModel
      .find({ professorRequested: true, professor: requestedProfessor })
      .populate(['student', 'entreprise', 'supervisor', 'professor'])
      .exec();
  }

  async update(id, updatePfeDto: UpdatePfeDto): Promise<any> {
    return await this.pfeModel.findByIdAndUpdate(id, updatePfeDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.pfeModel.findByIdAndRemove(id);
  }
}
