import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { MicrosoftStrategy } from './microsoft.strategy';

@Module({
  providers: [MicrosoftStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
