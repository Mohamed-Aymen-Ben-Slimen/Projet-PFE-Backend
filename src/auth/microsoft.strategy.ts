import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-microsoft';
import { Injectable } from '@nestjs/common';
import { AuthService, Provider } from './auth/auth.service';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
  constructor(private readonly authService: AuthService) {
    super(
      {
        clientID: 'a328841a-c099-41ba-9c1b-fb97786d8463',
        clientSecret: '04z9XgE6Kdrcy1iIA2_F~C0IzuXB2hn_.~',
        callbackURL: 'http://localhost:3000/auth/microsoft/callback',
        scope: ['user.read', 'openid', 'profile'],
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          // console.log(profile);
          const email = profile.emails[0].value;
          const jwt: string = await this.authService.validateOAuthLogin(
            email,
            Provider.MICROSOFT,
          );
          const user = {
            token: jwt,
          };

          done(null, user);
        } catch (err) {
          console.log(err);
          done(err, false);
        }
      },
    );
  }
}
