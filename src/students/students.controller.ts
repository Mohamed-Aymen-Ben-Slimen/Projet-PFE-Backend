import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.model';
import { Body } from '@nestjs/common';
import { CreateStudentDto } from './DTO-student/create-student.dto';
import { UpdateStudentDto } from './DTO-student/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get('/:id')
  async getStudentById(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findById(id);
  }

  @Post('')
  async postStudent(@Body() newProf: CreateStudentDto) {
    await this.studentsService.create(newProf);
    return newProf;
  }

  @Post('/all')
  async postStudents(@Body() newProfs: CreateStudentDto[]) {
    newProfs.map(async (item) => {
      await this.studentsService.create(item);
    });
    return newProfs;
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return await this.studentsService.delete(id);
  }

  @Put(':id')
  async updateStudent(
    @Body() updatedStudent: UpdateStudentDto,
    @Param('id') id: string,
  ) {
    await this.studentsService.update(id, updatedStudent);
    return updatedStudent;
  }
}
