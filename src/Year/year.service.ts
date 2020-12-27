import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Year, YearDocument } from './year.model';
import { CreateYearDto } from './Dto/CreateYearDto';

@Injectable()
export class YearService {
  constructor(@InjectModel(Year.name) private readonly yearModel: Model<YearDocument>) {
  }

  async create(createYearDto: CreateYearDto): Promise<Year> {
    const createdYear = new this.yearModel(createYearDto);
    return createdYear.save();
  }

  async findAll(): Promise<Year[]> {
    return this.yearModel.find().exec();
  }

  async findById(id: string): Promise<Year> {
    return this.yearModel.findById(id).exec();
  }

  async update(id, updateYearDto: CreateYearDto): Promise<any> {
    return this.yearModel.findByIdAndUpdate(id, updateYearDto, {
      new: true,
    });
  }

  async delete(id: string, ): Promise<Year> {
    return this.yearModel.findByIdAndRemove(id);
  }
}
