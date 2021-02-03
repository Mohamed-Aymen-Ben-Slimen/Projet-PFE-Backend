import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Major, MajorDocument } from './major.model';
import { CreateMajorDto } from './dtos/CreateMajorDto';

// Since the Majors names are in an enum, we cannot update them

@Injectable()
export class MajorService {
  constructor(@InjectModel(Major.name) private readonly majorModel: Model<MajorDocument>) {
  }

  async create(createMajorDto: CreateMajorDto): Promise<Major> {
    const createdMajor = new this.majorModel(createMajorDto);
    return createdMajor.save();
  }

  async findAll(): Promise<Major[]> {
    return this.majorModel.find().exec();
  }

  async findById(id: string): Promise<Major> {
    return this.majorModel.findById(id).exec();
  }

  async delete(id: string, ): Promise<Major> {
    return this.majorModel.findByIdAndRemove(id);
  }

}
