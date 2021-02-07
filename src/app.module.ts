import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { ProfessorsModule } from './professors/professors.module';
import { MajorModule } from './major/major.module';
import { ClassModule } from './class/class.module';
import { DepartmentModule } from './department/department.module';
import { YearModule } from './Year/year.module';
import { SessionModule } from './session/session.module';
import { PfeModule } from './pfe/pfe.module';
import { SoutenanceModule } from './soutenance/soutenance.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { ReportModule } from './report/report.module';
import { AdminModule } from './admin/admin.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    StudentsModule,
    ProfessorsModule,
    AdminModule,
    MajorModule,
    ClassModule,
    DepartmentModule,
    YearModule,
    SessionModule,
    PfeModule,
    SoutenanceModule,
    EntrepriseModule,
    SupervisorModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
