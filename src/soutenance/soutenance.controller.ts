import { Controller } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { Soutenance } from './soutenance.model';
import { Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { CreateSoutenanceDto } from './dtos/createSoutenanceDto';
import { UpdateSoutenanceDto } from './dtos/updateSoutenanceDto';

@Controller('soutenance')
export class SoutenanceController {
  constructor(private readonly soutenanceService: SoutenanceService) {}

  @Get()
  async findAll(): Promise<Soutenance[]> {
    return this.soutenanceService.findAll();
  }

  @Get('/:id')
  async getSoutenanceById(@Param('id') id: string): Promise<Soutenance> {
    return this.soutenanceService.findById(id);
  }

  @Post('')
  async postSoutenance(@Body() newSoutenance: CreateSoutenanceDto) {
    await this.soutenanceService.create(newSoutenance);
    return newSoutenance;
  }

  @Post('/all')
  async postSoutenances(@Body() newSoutenances: CreateSoutenanceDto[]) {
    newSoutenances.map(async (item) => {
      await this.soutenanceService.create(item);
    });
    return newSoutenances;
  }

  @Delete(':id')
  async deleteSoutenance(@Param('id') id: string) {
    return await this.soutenanceService.delete(id);
  }

  @Put(':id')
  async updateSoutenance(
    @Body() updatedSoutenance: UpdateSoutenanceDto,
    @Param('id') id: string,
  ) {
    await this.soutenanceService.update(id, updatedSoutenance);
    return updatedSoutenance;
  }
}
