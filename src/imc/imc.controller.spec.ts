import { Test, TestingModule } from '@nestjs/testing';
import { ImcController } from './imc.controller';
import { ImcService } from './imc.service';

describe('ImcController', () => {
  let controller: ImcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImcController],
      providers: [ImcService],
    }).compile();

    controller = module.get<ImcController>(ImcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
