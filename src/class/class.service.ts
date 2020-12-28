import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Class, ClassDocument } from './class.model';
import { CreateClassDto } from './Dto/CreateClassDto';

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private readonly classModel: Model<ClassDocument>) {
  }

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const createdClass = new this.classModel(createClassDto);
    return createdClass.save();
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find().exec();
  }

  async findById(id: string): Promise<Class> {
    return this.classModel.findById(id).exec();
  }

  async delete(id: string, ): Promise<Class> {
    return this.classModel.findByIdAndRemove(id);
  }
}
