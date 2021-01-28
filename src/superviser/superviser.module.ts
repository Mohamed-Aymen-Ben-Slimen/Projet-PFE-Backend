import { Module } from '@nestjs/common';
import { SuperviserController } from './superviser.controller';
import { SuperviserService } from './superviser.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Superviser, SuperviserSchema } from './model/superviser.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Superviser.name, schema: SuperviserSchema }])
  ],
  controllers: [SuperviserController],
  providers: [SuperviserService]
})
export class SuperviserModule {}
