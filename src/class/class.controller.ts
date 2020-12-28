import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClassService } from './class.service';
import { Class } from './class.model';
import { CreateClassDto } from './Dto/CreateClassDto';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {
  }

  @Get('')
  async findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Class> {
    return this.classService.findById(id);
  }

  @Post('')
  async add(@Body() newClass: CreateClassDto) {
    await this.classService.create(newClass);
    return newClass;
  }

  @Post('/all')
  async addAll(@Body() newClasses: CreateClassDto[]) {
    newClasses.map(async (item) => {
      await this.classService.create(item);
    });
    return newClasses;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.classService.delete(id);
  }
}
