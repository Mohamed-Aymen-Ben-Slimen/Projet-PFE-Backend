import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { MicrosoftStrategy } from './microsoft.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth/auth.service';
import { ProfessorsModule } from '../professors/professors.module';
import { StudentsModule } from '../students/students.module';
import { LocalStrategy } from './local.strategy';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [
    ProfessorsModule,
    StudentsModule,
    AdminModule],
  providers: [
    MicrosoftStrategy,
    JwtStrategy,
    AuthService,
    LocalStrategy
  ],
  controllers: [AuthController],
})
export class AuthModule {}
