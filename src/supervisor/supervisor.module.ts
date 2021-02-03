import { Module } from '@nestjs/common';
import { SupervisorController } from './supervisor.controller';
import { SupervisorService } from './supervisor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Supervisor, SupervisorSchema } from './model/supervisor.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Supervisor.name, schema: SupervisorSchema }])
  ],
  controllers: [SupervisorController],
  providers: [SupervisorService]
})
export class SupervisorModule {}
