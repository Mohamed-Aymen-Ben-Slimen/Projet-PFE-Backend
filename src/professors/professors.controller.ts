import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfessorDto } from './DTO-Professor/create-professor.dto';
import { UpdateProfessorDto } from './DTO-Professor/update-professor.dto';
import { ProfessorsService } from './professors.service';
import { Professor } from './professor.model';
import { DepartmentEnum } from 'src/department/department.enum';

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

  @Get('/department/:department')
  async getProfessorsByDepartment(
    @Param('department') department: DepartmentEnum,
  ): Promise<Professor[]> {
    console.log("Get One Prof");
    return this.professorService.findByDepartment(department);
  }

  @Post('')
  async postProfessor(
    @Body() newProf: CreateProfessorDto
  ) {
    console.log("Create a professor");
    await this.professorService.create(newProf);
    return newProf;
  }

  @Post('/all')
  async postProfessors(
    @Body() newProfs: CreateProfessorDto[]
  ) {
    console.log("Create professors excel");
    newProfs.map(async (item) => {
      await this.professorService.create(item);
    });
    return newProfs;
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
