import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfessorDto } from './DTO-Professor/create-professor.dto';
import { UpdateProfessorDto } from './DTO-Professor/update-professor.dto';

@Controller('professors')
export class ProfessorsController {
  @Get('')
  getProfessors(): string {
    console.log('hh');
    return("hh");
  }

  @Get('/:id')
  getProfessorById(
    @Param('id') id: string,
  ) {
    console.log("read prof");
    return("read prof");
  }

  @Post('')
  postProfessor(
    @Body() newProf: CreateProfessorDto
  ) {
    console.log("create prof");
    return ("create prof");
  }

  @Delete(':id')
  deleteProfessor(
    @Param('id') id: string
  ) {
    console.log("delete prof");
    return ("delete prof");
  }

  @Put(':id')
  updateProfessor(
    @Body() updatedProf : UpdateProfessorDto,
    @Param('id') id: string
  ) {
    console.log("update prof");
    return ("update prof");
  }
}
