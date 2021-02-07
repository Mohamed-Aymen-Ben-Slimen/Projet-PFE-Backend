import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { Supervisor } from './model/supervisor.model';
import { CreateSupervisorDto } from './dtos/createSupervisor';
import { UpdateSupervisorDto } from './dtos/updateSupervisor';

@Controller('supervisor')
export class SupervisorController {


  constructor(private readonly supervisorService: SupervisorService) {}

  @Get()
  async findAll(): Promise<Supervisor[]> {
    return this.supervisorService.findAll();
  }

  @Get('/:id')
  async getPfeById(@Param('id') id: string): Promise<Supervisor> {
    return this.supervisorService.findById(id);
  }

  @Post('')
  async postSupervisor (@Body() newSupervisor: CreateSupervisorDto) {
    await this.supervisorService.create(newSupervisor);
    return newSupervisor;
  }


  @Delete(':id')
  async deleteSupervisor (@Param('id') id: string) {
    return await this.supervisorService.delete(id);
  }

  @Put(':id')
  async updateSupervisor(
    @Body() updatedSupervisor: UpdateSupervisorDto,
    @Param('id') id: string,
  ) {
    await this.supervisorService.update(id, updatedSupervisor);
    return updatedSupervisor;
  }

}
