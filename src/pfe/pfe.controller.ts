import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PfeService } from './pfe.service';
import { SubjectPfe } from '../pfe/sujet-pfe.model';
import { SubjectStatus } from './enums/subject-status.enum';
import { CreatePfeDto } from './dtos/createPfeDto';
import { UpdatePfeDto } from './dtos/updatePfeDto';
import { UpdateStatusPfeDto } from './dtos/updateStatusPfeDto';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('pfe')
export class PfeController {
  constructor(private readonly pfeService: PfeService) {}



  @Get()
  async findWithStatus(@Query('status') status: SubjectStatus): Promise<SubjectPfe[]> {
    if (!status) {
      return this.pfeService.findAll();
    } else {
      return this.pfeService.findWithStatus(status);
    }
  }

  @Get('/:id')
  async getPfeById(@Param('id') id: string): Promise<SubjectPfe> {
    return this.pfeService.findById(id);
  }

  @Post('')
  async postPfe (@Body() newPfe: CreatePfeDto) {
    await this.pfeService.create(newPfe);
    return newPfe;
  }

  @Post('/all')
  async postPfes(@Body() newPfes: CreatePfeDto[]) {
    newPfes.map(async (item) => {
      await this.pfeService.create(item);
    });
    return newPfes;
  }

  @Delete(':id')
  async deletePfe(@Param('id') id: string) {
    return await this.pfeService.delete(id);
  }

  @Put(':id')
  async updatePfe(
    @Body() updatedPfe: UpdatePfeDto,
    @Param('id') id: string,
  ) {
    await this.pfeService.update(id, updatedPfe);
    return updatedPfe;
  }

  @Patch(':id')
  async UpdateStatusPfe(
    @Body() updatedPfe: UpdateStatusPfeDto,
    @Param('id') id: string,
  ) {
    await this.pfeService.updateStatus(id, updatedPfe);
    return updatedPfe;
  }
}
