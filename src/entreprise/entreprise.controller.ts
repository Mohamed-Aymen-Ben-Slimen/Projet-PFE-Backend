import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { Entreprise } from './model/entreprise.model';
import { CreateEntrepriseDto } from './dtos/createEntrepriseDto';
import { UpdateEntrepriseDto } from './dtos/updateEntrepriseDto';

@Controller('entreprise')
export class EntrepriseController {

  constructor(private readonly entrepriseService: EntrepriseService) {}


  @Get()
  async findAll(): Promise<Entreprise[]> {
    return this.entrepriseService.findAll();
  }

  @Get('/:id')
  async getPfeById(@Param('id') id: string): Promise<Entreprise> {
    return this.entrepriseService.findById(id);
  }

  @Post('')
  async postEntreprise (@Body() newEntreprise: CreateEntrepriseDto) {
    await this.entrepriseService.create(newEntreprise);
    return newEntreprise;
  }

  @Post('/all')
  async postEntreprises(@Body() newEntreprises: CreateEntrepriseDto[]) {
    newEntreprises.map(async (item) => {
      await this.entrepriseService.create(item);
    });
    return newEntreprises;
  }

  @Delete(':id')
  async deleteEntreprise(@Param('id') id: string) {
    return await this.entrepriseService.delete(id);
  }

  @Put(':id')
  async updateEntreprise(
    @Body() updatedEntreprise: UpdateEntrepriseDto,
    @Param('id') id: string,
  ) {
    await this.entrepriseService.update(id, updatedEntreprise);
    return updatedEntreprise;
  }
}
