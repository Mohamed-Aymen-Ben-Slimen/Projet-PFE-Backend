import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SuperviserService } from './superviser.service';
import { Superviser } from './model/superviser.model';
import { CreateSuperviserDto } from './dtos/createSuperviser';
import { UpdateSuperviserDto } from './dtos/updateSuperviser';

@Controller('superviser')
export class SuperviserController {


  constructor(private readonly superviserService: SuperviserService) {}

  @Get()
  async findAll(): Promise<Superviser[]> {
    return this.superviserService.findAll();
  }

  @Get('/:id')
  async getPfeById(@Param('id') id: string): Promise<Superviser> {
    return this.superviserService.findById(id);
  }

  @Post('')
  async postSuperviser (@Body() newSuperviser: CreateSuperviserDto) {
    await this.superviserService.create(newSuperviser);
    return newSuperviser;
  }


  @Delete(':id')
  async deleteSuperviser (@Param('id') id: string) {
    return await this.superviserService.delete(id);
  }

  @Put(':id')
  async updateSuperviser(
    @Body() updatedSuperviser: UpdateSuperviserDto,
    @Param('id') id: string,
  ) {
    await this.superviserService.update(id, updatedSuperviser);
    return updatedSuperviser;
  }

}
