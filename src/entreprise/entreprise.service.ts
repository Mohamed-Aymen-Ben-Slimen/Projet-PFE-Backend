import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Entreprise, EntrepriseDocument } from './model/entreprise.model';
import { CreateEntrepriseDto } from './dtos/createEntrepriseDto';
import { UpdateEntrepriseDto } from './dtos/updateEntrepriseDto';

@Injectable()
export class EntrepriseService {

  constructor(
    @InjectModel(Entreprise.name)
    private readonly entrepriseModel: Model<EntrepriseDocument>,
  ) {}

  async create(createEntrepriseDto: CreateEntrepriseDto): Promise<Entreprise> {
    const createdEntreprise = new this.entrepriseModel(createEntrepriseDto);
    return createdEntreprise.save();
  }

  async findAll(): Promise<Entreprise[]> {
    return this.entrepriseModel.find().exec();
  }

  async findById(id): Promise<Entreprise> {
    return await this.entrepriseModel.findById(id).exec();
  }

  async update(id, updateEntrepriseDto: UpdateEntrepriseDto): Promise<any> {
    return await this.entrepriseModel.findByIdAndUpdate(id, updateEntrepriseDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.entrepriseModel.findByIdAndRemove(id);
  }
}
