import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosMedicosService } from './registros-medicos.service';

describe('RegistrosMedicosService', () => {
  let service: RegistrosMedicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrosMedicosService],
    }).compile();

    service = module.get<RegistrosMedicosService>(RegistrosMedicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
