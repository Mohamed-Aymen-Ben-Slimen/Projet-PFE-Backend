import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSoutenanceDto } from './dtos/createSoutenanceDto';
import { UpdateSoutenanceDto } from './dtos/updateSoutenanceDto';
import { Soutenance, SoutenanceDocument } from './soutenance.model';

@Injectable()
export class SoutenanceService {
  constructor(
    @InjectModel(Soutenance.name)
    private readonly soutenanceModel: Model<SoutenanceDocument>,
  ) {}

  async create(createPfeDto: CreateSoutenanceDto): Promise<Soutenance> {
    console.log(new this.soutenanceModel());
    const createdPfe = new this.soutenanceModel(createPfeDto);
    console.log(createPfeDto);
    return createdPfe.save();
  }

  async findAll(): Promise<Soutenance[]> {
    return this.soutenanceModel.find().populate('subjectPfe').exec();
  }

  async findById(id): Promise<Soutenance> {
    return await this.soutenanceModel.findById(id).exec();
  }

  async update(id, updateSoutenanceDto: UpdateSoutenanceDto): Promise<any> {
    return await this.soutenanceModel.findByIdAndUpdate(
      id,
      { updateSoutenanceDto },
      { new: true },
    );
  }

  async delete(id): Promise<any> {
    return await this.soutenanceModel.findByIdAndRemove(id);
  }
}
