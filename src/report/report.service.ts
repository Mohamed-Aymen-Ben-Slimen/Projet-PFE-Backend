import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Report, ReportDocument } from './model/report.model';
import { CreateReportDto } from './dtos/createReportDto';
import { ValidateReportDto } from './dtos/validateReportDto';
import { RemarkReportDto } from './dtos/remarkReportDto';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Report.name)
    private readonly reportModel: Model<ReportDocument>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const createdReport = new this.reportModel(createReportDto);
    return createdReport.save();
  }

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  async findById(id): Promise<Report> {
    return await this.reportModel.findById(id).exec();
  }

  async validateReport(id, validaReportDto: ValidateReportDto): Promise <any> {
    return await this.reportModel.findByIdAndUpdate(id, validaReportDto, {
      new: true,
    })
  }

  async addRemarkReport(id, remarkReportDto: RemarkReportDto): Promise <any> {
    return await this.reportModel.findByIdAndUpdate(id, remarkReportDto, {
      new: true,
    })
  }

  async delete(id): Promise<any> {
    return await this.reportModel.findByIdAndRemove(id);
  }
}
