import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('microsoft'))
  async outlookAuth(@Req() req) {
    return { message: 'auth' };
  }

  @Get('/microsoft/callback/')
  @UseGuards(AuthGuard('microsoft'))
  outlookAuthRedirect(@Req() req, @Res() res) {
    return res.redirect(
      `http://localhost:4200/auth/success?token=${req.user.accessToken}`,
    );
  }
}
