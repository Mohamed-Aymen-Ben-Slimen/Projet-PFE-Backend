import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwt from 'jsonwebtoken';
import { AuthService } from './auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

  private logger: Logger = new Logger('Loooooooooooooooooooooogger');

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload, done) {
    console.log('validaaaaaaaaaaaaaaaate');
    this.logger.log(payload);
    try {
      // You could add a function to the authService to verify the claims of the token:
      // i.e. does the user still have the roles that are claimed by the token
      //const validClaims = await this.authService.verifyTokenClaims(payload);

      //if (!validClaims)
      //    return done(new UnauthorizedException('invalid token claims'), false);
      this.logger.log(payload.email);
      const { id, email, role } = payload;
      // const user = await this.authService.validateUserById(id);
      done(null, payload);
    } catch (err) {
      // throw new UnauthorizedException('unauthorized', err.message);
      console.log(err);
    }
  }
}
