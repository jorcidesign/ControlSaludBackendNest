import { Test, TestingModule } from '@nestjs/testing';
import { PerfilPacientesController } from './perfil-pacientes.controller';
import { PerfilPacientesService } from './perfil-pacientes.service';

describe('PerfilPacientesController', () => {
  let controller: PerfilPacientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilPacientesController],
      providers: [PerfilPacientesService],
    }).compile();

    controller = module.get<PerfilPacientesController>(PerfilPacientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
