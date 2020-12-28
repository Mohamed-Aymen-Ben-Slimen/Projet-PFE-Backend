import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.model';
import { CreateDepartmentDto } from './Dto/CreateDepartmentDto';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {
  }

  @Get('')
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Department> {
    return this.departmentService.findById(id);
  }

  @Post('')
  async add(@Body() newDepartment: CreateDepartmentDto) {
    await this.departmentService.create(newDepartment);
    return newDepartment;
  }

  @Post('/all')
  async addAll(@Body() newDepartments: CreateDepartmentDto[]) {
    newDepartments.map(async (item) => {
      await this.departmentService.create(item);
    });
    return newDepartments;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.departmentService.delete(id);
  }
}
