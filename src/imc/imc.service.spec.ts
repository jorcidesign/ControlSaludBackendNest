import { Test, TestingModule } from '@nestjs/testing';
import { ImcService } from './imc.service';

describe('ImcService', () => {
  let service: ImcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImcService],
    }).compile();

    service = module.get<ImcService>(ImcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
