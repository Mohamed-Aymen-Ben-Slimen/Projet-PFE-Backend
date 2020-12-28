import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { YearService } from './year.service';
import { Year } from './year.model';
import { CreateYearDto } from './Dto/CreateYearDto';

@Controller('years')
export class YearController {
  constructor(private readonly yearService: YearService) {
  }

  @Get('')
  async findAll(): Promise<Year[]> {
    return this.yearService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Year> {
    return this.yearService.findById(id);
  }

  @Post('')
  async add(@Body() newClass: CreateYearDto) {
    await this.yearService.create(newClass);
    return newClass;
  }

  @Post('/all')
  async addAll(@Body() newClasses: CreateYearDto[]) {
    newClasses.map(async (item) => {
      await this.yearService.create(item);
    });
    return newClasses;
  }

  @Patch('/:id')
  async update(
    @Body() updatedYear: CreateYearDto,
    @Param('id') id: string,
  ) {
    await this.yearService.update(id, updatedYear);
    return updatedYear;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.yearService.delete(id);
  }
}
