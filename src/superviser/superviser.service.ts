import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Superviser, SuperviserDocument } from './model/superviser.model';
import { CreateSuperviserDto } from './dtos/createSuperviser';
import { UpdateSuperviserDto } from './dtos/updateSuperviser';

@Injectable()
export class SuperviserService {

  constructor(
    @InjectModel(Superviser.name)
    private readonly superviserModel: Model<SuperviserDocument>,
  ) {}

  async create(createSuperviserDto: CreateSuperviserDto): Promise<Superviser> {
    const createdSuperviser = new this.superviserModel(createSuperviserDto);
    return createdSuperviser.save();
  }

  async findAll(): Promise<Superviser[]> {
    return this.superviserModel.find().exec();
  }

  async findById(id): Promise<Superviser> {
    return await this.superviserModel.findById(id).exec();
  }

  async update(id, updateSuperviserDto: UpdateSuperviserDto): Promise<any> {
    return await this.superviserModel.findByIdAndUpdate(id, updateSuperviserDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.superviserModel.findByIdAndRemove(id);
  }
}
