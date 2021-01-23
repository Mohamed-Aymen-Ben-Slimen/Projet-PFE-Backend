import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoutenanceController } from './soutenance.controller';
import { SoutenanceService } from './soutenance.service';
import { Soutenance, SoutenanceSchema } from './soutenance.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Soutenance.name, schema: SoutenanceSchema },
    ]),
  ],
  controllers: [SoutenanceController],
  providers: [SoutenanceService],
})
export class SoutenanceModule {}
