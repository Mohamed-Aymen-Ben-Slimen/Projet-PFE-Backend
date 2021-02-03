import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from './session.model';
import { CreateSessionDto } from './Dto/createSessionDto';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {
  }

  @Get('')
  async findAll(): Promise<Session[]> {
    return this.sessionService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Session> {
    return this.sessionService.findById(id);
  }

  @Post('')
  async add(@Body() newSession: CreateSessionDto) {
    await this.sessionService.create(newSession);
    return newSession;
  }

  @Post('/all')
  async addAll(@Body() newSessions: CreateSessionDto[]) {
    newSessions.map(async (item) => {
      await this.sessionService.create(item);
    });
    return newSessions;
  }

  @Patch('/:id')
  async update(
    @Body() updatedSession: CreateSessionDto,
    @Param('id') id: string,
  ) {
    await this.sessionService.update(id, updatedSession);
    return updatedSession;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sessionService.delete(id);
  }
}
