import { Module } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { SoutenanceContoller } from './soutenance.contoller';
import { MongooseModule } from '@nestjs/mongoose';
import { Soutenance, SoutenanceSchema } from './soutenance.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Soutenance.name, schema: SoutenanceSchema },
    ]),
  ],
  providers: [SoutenanceService],
  controllers: [SoutenanceContoller],
})
export class SoutenanceModule {}
