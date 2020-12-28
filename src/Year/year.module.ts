import { Module } from '@nestjs/common';
import { YearService } from './year.service';
import { YearController } from './year.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Year, YearSchema } from './year.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Year.name, schema: YearSchema }])
  ],
  providers: [YearService],
  controllers: [YearController]
})
export class YearModule {}
