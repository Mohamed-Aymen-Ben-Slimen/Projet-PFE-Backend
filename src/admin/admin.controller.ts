import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.model';
import { Body } from '@nestjs/common';
import { CreateAdminDto } from './DTO-student/create-admin.dto';
import { UpdateAdminDto } from './DTO-student/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get('/:id')
  async getAdminById(@Param('id') id: string): Promise<Admin> {
    return this.adminService.findById(id);
  }

  @Post('')
  async postAdmin(@Body() newProf: CreateAdminDto) {
    await this.adminService.create(newProf);
    return newProf;
  }

  @Post('/all')
  async postAdmins(@Body() newProfs: CreateAdminDto[]) {
    newProfs.map(async (item) => {
      await this.adminService.create(item);
    });
    return newProfs;
  }

  @Delete(':id')
  async deleteAdmin(@Param('id') id: string) {
    return await this.adminService.delete(id);
  }

  @Put(':id')
  async updateAdmin(
    @Body() updatedAdmin: UpdateAdminDto,
    @Param('id') id: string,
  ) {
    await this.adminService.update(id, updatedAdmin);
    return updatedAdmin;
  }
}
