import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { Student } from '../../students/student.model';
import { Professor } from '../../professors/professor.model';
import { StudentsService } from '../../students/students.service';
import { ProfessorsService } from '../../professors/professors.service';

export enum Provider {
  MICROSOFT = 'microsoft',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  constructor(
    private readonly studentService: StudentsService,
    private readonly professorService: ProfessorsService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Student | Professor> {
    try {
      const student: Student = await this.studentService.findByEmail(email);
      if (student) {
        if (this.verifPassword(student, password)) return student;
      }
      const professor: Professor = await this.professorService.findByEmail(
        email,
      );
      if (professor) {
        if (this.verifPassword(professor, password)) return professor;
      }
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async validateUserById(userId: string): Promise<Student | Professor> {
    try {
      const student: Student = await this.studentService.findById(userId);
      if (student) {
        return student;
      }
      const professor: Professor = await this.professorService.findById(userId);
      if (professor) {
        return professor;
      }
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  verifPassword(user: any, password: string): boolean {
    if (user.password === password) {
      return true;
    }
    return false;
  }

  async generateLocalToken(user: any): Promise<Buffer> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

      /*
      let payload = {
        id: user['_id'],
        email: user.email,
        role: user.role,
      };
       */

      const payload = {
        id: '12345678',
        email: 'email',
        role: 'user',
      };

      const jwt = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateLocalLogin', err.message);
    }
  }

  async validateOAuthLogin(email: string, provider: Provider): Promise<Buffer> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

      const student = await this.studentService.findByEmail(email);

      if (!student) {
        const jwt = this.generateLocalToken(student);
        return jwt;
      }

      return null;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  async generateRefreshToken(user: any): Promise<string> {
    try {
      const payload = {
        id: user['_id'],
        email: user.email,
        role: user.role,
        type: 'REFRESH TOKEN',
      };

      const jwt = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600 * 24 * 7,
      });

      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateLocalLogin', err.message);
    }
  }

  async compareAccessAndRefreshToken(
    accessToken: string,
    refreshToken: string,
  ): Promise<any> {
    const accessTokenPayload = verify(accessToken, process.env.JWT_SECRET_KEY);
    const refreshTokenPayload = verify(
      refreshToken,
      process.env.JWT_SECRET_KEY,
    );
    if (accessTokenPayload.id === refreshTokenPayload.id) {
      const newAccessToken = sign(
        {
          id: accessTokenPayload.id,
          email: accessTokenPayload.email,
          role: accessTokenPayload.role,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 },
      );
      const newRefreshToken = sign(
        {
          id: refreshTokenPayload.id,
          email: refreshTokenPayload.email,
          role: refreshTokenPayload.role,
          type: 'REFRESH TOKEN',
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 * 24 * 7 },
      );
      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    }
    return null;
  }
}
