import { Test, TestingModule } from '@nestjs/testing';
import { PerfilPacientesService } from './perfil-pacientes.service';

describe('PerfilPacientesService', () => {
  let service: PerfilPacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfilPacientesService],
    }).compile();

    service = module.get<PerfilPacientesService>(PerfilPacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
