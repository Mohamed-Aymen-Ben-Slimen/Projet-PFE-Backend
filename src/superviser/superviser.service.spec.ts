import { Test, TestingModule } from '@nestjs/testing';
import { SuperviserService } from './superviser.service';

describe('SuperviserService', () => {
  let service: SuperviserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperviserService],
    }).compile();

    service = module.get<SuperviserService>(SuperviserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
