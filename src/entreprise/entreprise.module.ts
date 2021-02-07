import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Entreprise, EntrepriseSchema } from './model/entreprise.model';
import { EntrepriseController } from './entreprise.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entreprise.name, schema: EntrepriseSchema }]),
  ],
  exports: [
    EntrepriseService
  ],
  controllers: [EntrepriseController],
  providers: [EntrepriseService]
})
export class EntrepriseModule {}
