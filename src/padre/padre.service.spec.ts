import { Test, TestingModule } from '@nestjs/testing';
import { PadreService } from './padre.service';

describe('PadreService', () => {
  let service: PadreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadreService],
    }).compile();

    service = module.get<PadreService>(PadreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
