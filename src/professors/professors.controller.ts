import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfessorDto } from './DTO-Professor/create-professor.dto';
import { UpdateProfessorDto } from './DTO-Professor/update-professor.dto';
import { ProfessorsService } from './professors.service';
import { Professor } from './professor.model';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorService: ProfessorsService) {}

  @Get('')
  async getProfessors(): Promise<Professor[]> {
    console.log('Get Professors');
    return this.professorService.findAll();
  }

  @Get('/:id')
  async getProfessorById(
    @Param('id') id: string,
  ): Promise<Professor> {
    console.log("Get One Prof");
    return this.professorService.findById(id);
  }

  @Post('')
  async postProfessor(
    @Body() newProf: CreateProfessorDto
  ) {
    console.log("Create a professor");
    await this.professorService.create(newProf);
    return newProf;
  }

  @Delete(':id')
   async deleteProfessor(
    @Param('id') id: string
  ) {
    console.log("Delete a Professor");
    return await this.professorService.delete(id);
  }

  @Put(':id')
  async updateProfessor(
    @Body() updatedProf : UpdateProfessorDto,
    @Param('id') id: string
  ) {
    console.log("update prof");
    await this.professorService.update(id, updatedProf);
    return updatedProf;
  }
}
