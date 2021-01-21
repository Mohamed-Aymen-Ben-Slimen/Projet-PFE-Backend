import { Injectable } from '@nestjs/common';
import { StudentDocument, Student } from './student.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './DTO-student/create-student.dto';
import { UpdateStudentDto } from './DTO-student/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    console.log(new this.studentModel());
    const createdProfessor = new this.studentModel(createStudentDto);
    console.log(createStudentDto);
    return createdProfessor.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findById(id): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async findByEmail(email): Promise<Student> {
    return await this.studentModel.findOne({ email }).exec();
  }

  async update(id, updateStudentDto: UpdateStudentDto): Promise<any> {
    return await this.studentModel.findByIdAndUpdate(id, updateStudentDto, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.studentModel.findByIdAndRemove(id);
  }
}
