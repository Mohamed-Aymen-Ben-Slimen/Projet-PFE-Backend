import { Controller, Get, Req, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('microsoft'))
  async outlookAuth(@Req() req) {
    return {message: 'auth'};
  }

  @Get('/microsoft/callback/')
  @UseGuards(AuthGuard('microsoft'))
  outlookAuthRedirect(@Req() req) {
    console.log(req.user);
    return {
      message: 'logged',
      user: req.user,
    };
  }
}
