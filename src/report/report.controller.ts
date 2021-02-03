import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './model/report.model';
import { CreateReportDto } from './dtos/createReportDto';
import { ValidateReportDto } from './dtos/validateReportDto';
import { RemarkReportDto } from './dtos/remarkReportDto';

@Controller('report')
export class ReportController {

  constructor(private readonly reportService: ReportService) {}

  @Get()
  async findAll(): Promise<Report[]> {
    return this.reportService.findAll();
  }

  @Get('/:id')
  async getPfeById(@Param('id') id: string): Promise<Report> {
    return this.reportService.findById(id);
  }

  @Post('')
  async postPfe (@Body() newReport: CreateReportDto) {
    await this.reportService.create(newReport);
    return newReport;
  }

  @Post('/all')
  async postPfes(@Body() newReports: CreateReportDto[]) {
    newReports.map(async (item) => {
      await this.reportService.create(item);
    });
    return newReports;
  }

  @Delete(':id')
  async deletePfe(@Param('id') id: string) {
    return await this.reportService.delete(id);
  }

  @Put(':id/validate')
  async validateReport(
    @Body() validatedReport: ValidateReportDto,
    @Param('id') id: string,
  ) {
    await this.reportService.validateReport(id, validatedReport);
    return validatedReport;
  }

  @Put(':id/validate')
  async remarkReport(
    @Body() remarkedReport: RemarkReportDto,
    @Param('id') id: string,
  ) {
    await this.reportService.addRemarkReport(id, remarkedReport);
    return remarkedReport;
  }
}
