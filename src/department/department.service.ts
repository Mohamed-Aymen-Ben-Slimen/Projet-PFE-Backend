import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Department, DepartmentDocument } from './department.model';
import { CreateDepartmentDto } from './Dto/CreateDepartmentDto';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel(Department.name) private readonly departmentModel: Model<DepartmentDocument>) {
  }

  async create(departmentClassDto: CreateDepartmentDto): Promise<Department> {
    const createdDepartment = new this.departmentModel(departmentClassDto);
    return createdDepartment.save();
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }

  async findById(id: string): Promise<Department> {
    return this.departmentModel.findById(id).exec();
  }

  async delete(id: string, ): Promise<Department> {
    return this.departmentModel.findByIdAndRemove(id);
  }
}
