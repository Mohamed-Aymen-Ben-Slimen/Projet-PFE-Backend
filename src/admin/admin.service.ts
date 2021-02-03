import { Injectable } from '@nestjs/common';
import { AdminDocument, Admin } from './admin.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './DTO-student/create-admin.dto';
import { UpdateAdminDto } from './DTO-student/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const createdAdmin = new this.adminModel(createAdminDto);
    return createdAdmin.save();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async findById(id): Promise<Admin> {
    return await this.adminModel.findById(id).exec();
  }

  async update(id, updateAdminDto: UpdateAdminDto): Promise<any> {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return this.adminModel.findByIdAndRemove(id);
  }
}
