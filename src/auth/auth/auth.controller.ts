import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local')
  @UseGuards(AuthGuard('local'))
  async localAuth(@Req() req) {
    const { user } = req;
    console.log(req);
    const jwt = {
      accessToken: await this.authService.generateLocalToken(user),
      refreshToken: await this.authService.generateRefreshToken(user),
      user: user,
    };
    return jwt;
  }

  @Get('microsoft')
  @UseGuards(AuthGuard('microsoft'))
  async outlookAuth(@Req() req) {
    return { message: 'auth' };
  }

  @Get('/microsoft/callback/')
  @UseGuards(AuthGuard('microsoft'))
  outlookAuthRedirect(@Req() req, @Res() res) {
    return res.redirect(
      `http://localhost:4200/signin/success?token=${req.user.token}`,
    );
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource(@Req() req) {
    const { user } = req;
    console.log(user);
    return 'JWT is working!';
  }

  @Get('refresh')
  refresh(@Req() req) {
    const { accessToken, refreshToken } = req.body;
    return this.authService.compareAccessAndRefreshToken(
      accessToken,
      refreshToken,
    );
  }
}
