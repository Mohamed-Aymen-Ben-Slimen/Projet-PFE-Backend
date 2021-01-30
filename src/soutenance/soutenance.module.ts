import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { SoutenanceService } from './soutenance.service';
import { Soutenance, SoutenanceSchema } from './soutenance.model';
import { SoutenanceController } from './soutenance.contoller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Soutenance.name, schema: SoutenanceSchema },
    ]),
  ],
  providers: [SoutenanceService],
  controllers: [SoutenanceController],
})
export class SoutenanceModule {}
