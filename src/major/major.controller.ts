import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MajorService } from './major.service';
import { Major } from './major.model';
import { CreateMajorDto } from './dtos/CreateMajorDto';

@Controller('majors')
export class MajorController {

  constructor(private readonly majorService: MajorService) {
  }

  @Get('')
  async findAll(): Promise<Major[]> {
    return this.majorService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Major> {
    return this.majorService.findById(id);
  }

  @Post('')
  async add(@Body() newMajor: CreateMajorDto) {
    await this.majorService.create(newMajor);
    return newMajor;
  }

  @Post('/all')
  async addAll(@Body() newMajors: CreateMajorDto[]) {
    newMajors.map(async (item) => {
      await this.majorService.create(item);
    });
    return newMajors;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.majorService.delete(id);
  }
}
