import { Test, TestingModule } from '@nestjs/testing';
import { PadreController } from './padre.controller';
import { PadreService } from './padre.service';

describe('PadreController', () => {
  let controller: PadreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadreController],
      providers: [PadreService],
    }).compile();

    controller = module.get<PadreController>(PadreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
