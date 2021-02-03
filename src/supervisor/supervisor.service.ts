import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Supervisor, SupervisorDocument } from './model/supervisor.model';
import { CreateSupervisorDto } from './dtos/createSupervisor';
import { UpdateSupervisorDto } from './dtos/updateSupervisor';

@Injectable()
export class SupervisorService {

  constructor(
    @InjectModel(Supervisor.name)
    private readonly superviserModel: Model<SupervisorDocument>,
  ) {}

  async create(createSupervisorDto: CreateSupervisorDto): Promise<Supervisor> {
    const createdSupervisor = new this.superviserModel(createSupervisorDto);
    return createdSupervisor.save();
  }

  async findAll(): Promise<Supervisor[]> {
    return this.superviserModel.find().exec();
  }

  async findById(id): Promise<Supervisor> {
    return await this.superviserModel.findById(id).exec();
  }

  async update(id, updateSupervisorDto: UpdateSupervisorDto): Promise<any> {
    return await this.superviserModel.findByIdAndUpdate(id, updateSupervisorDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.superviserModel.findByIdAndRemove(id);
  }
}
