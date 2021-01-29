import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { Soutenance } from './soutenance.model';
import { UpdateSoutenanceDto } from './dtos/updateSoutenanceDto';
import { CreateSoutenanceDto } from './dtos/createSoutenanceDto';

@Controller('soutenances')
export class SoutenanceContoller {
  constructor(private readonly soutenanceService: SoutenanceService) {
  }

  @Get('')
  async findAll(): Promise<Soutenance[]> {
    return this.soutenanceService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Soutenance> {
    return this.soutenanceService.findById(id);
  }

  @Post('')
  async add(@Body() newClass: CreateSoutenanceDto) {
    await this.soutenanceService.create(newClass);
    return newClass;
  }

  @Post('/all')
  async addAll(@Body() newClasses: CreateSoutenanceDto[]) {
    newClasses.map(async (item) => {
      await this.soutenanceService.create(item);
    });
    return newClasses;
  }

  @Patch('/:id')
  async update(
    @Body() updatedSoutenance: UpdateSoutenanceDto,
    @Param('id') id: string,
  ) {
    await this.soutenanceService.update(id, updatedSoutenance);
    return updatedSoutenance;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.soutenanceService.delete(id);
  }
}
