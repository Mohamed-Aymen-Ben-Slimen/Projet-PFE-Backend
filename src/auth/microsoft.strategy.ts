import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-microsoft';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
  constructor() {
    super(
      {
        clientID: 'a328841a-c099-41ba-9c1b-fb97786d8463',
        clientSecret: '04z9XgE6Kdrcy1iIA2_F~C0IzuXB2hn_.~',
        callbackURL: 'http://localhost:3000/auth/microsoft/callback',
        scope: ['user.read', 'openid', 'profile'],
      },
      function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
      },
    );
  }
}
