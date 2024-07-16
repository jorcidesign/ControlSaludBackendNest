import { Test, TestingModule } from '@nestjs/testing';
import { EsquemasVacunacionService } from './esquemas-vacunacion.service';

describe('EsquemasVacunacionService', () => {
  let service: EsquemasVacunacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsquemasVacunacionService],
    }).compile();

    service = module.get<EsquemasVacunacionService>(EsquemasVacunacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
