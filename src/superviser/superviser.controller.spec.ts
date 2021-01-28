import { Test, TestingModule } from '@nestjs/testing';
import { SuperviserController } from './superviser.controller';

describe('SuperviserController', () => {
  let controller: SuperviserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperviserController],
    }).compile();

    controller = module.get<SuperviserController>(SuperviserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
