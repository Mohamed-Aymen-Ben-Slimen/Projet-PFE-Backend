import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Session, SessionDocument } from './session.model';
import { CreateSessionDto } from './Dto/createSessionDto';

@Injectable()
export class SessionService {
  constructor(@InjectModel(Session.name) private readonly sessionModel: Model<SessionDocument>) {
  }

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }

  async findAll(): Promise<Session[]> {
    return this.sessionModel.find().exec();
  }

  async findById(id: string): Promise<Session> {
    return this.sessionModel.findById(id).exec();
  }

  async update(id, updateSessionDto: CreateSessionDto): Promise<any> {
    return this.sessionModel.findByIdAndUpdate(id, updateSessionDto, {
      new: true,
    });
  }

  async delete(id: string, ): Promise<Session> {
    return this.sessionModel.findByIdAndRemove(id);
  }
}
