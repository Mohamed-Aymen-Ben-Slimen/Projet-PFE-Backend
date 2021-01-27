import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Soutenance, SoutenanceDocument } from './soutenance.model';

@Injectable()
export class SoutenanceService {
  constructor(@InjectModel(Soutenance.name) private readonly soutenanceModel: Model<SoutenanceDocument>) {
  }

  async create(createYearDto: Soutenance): Promise<Soutenance> {
    const createdYear = new this.soutenanceModel(createYearDto);
    return createdYear.save();
  }

  async findAll(): Promise<Soutenance[]> {
    return this.soutenanceModel.find().exec();
  }

  async findById(id: string): Promise<Soutenance> {
    return this.soutenanceModel.findById(id).exec();
  }

  async update(id, updateYearDto: Soutenance): Promise<any> {
    return this.soutenanceModel.findByIdAndUpdate(id, updateYearDto, {
      new: true,
    });
  }

  async delete(id: string, ): Promise<Soutenance> {
    return this.soutenanceModel.findByIdAndRemove(id);
  }
}
