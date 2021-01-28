import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { Soutenance } from './soutenance.model';

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
  async add(@Body() newClass: Soutenance) {
    await this.soutenanceService.create(newClass);
    return newClass;
  }

  @Post('/all')
  async addAll(@Body() newClasses: Soutenance[]) {
    newClasses.map(async (item) => {
      await this.soutenanceService.create(item);
    });
    return newClasses;
  }

  @Patch('/:id')
  async update(
    @Body() updatedSoutenance: Soutenance,
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
