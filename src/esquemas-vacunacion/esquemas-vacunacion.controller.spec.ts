import { Test, TestingModule } from '@nestjs/testing';
import { EsquemasVacunacionController } from './esquemas-vacunacion.controller';
import { EsquemasVacunacionService } from './esquemas-vacunacion.service';

describe('EsquemasVacunacionController', () => {
  let controller: EsquemasVacunacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsquemasVacunacionController],
      providers: [EsquemasVacunacionService],
    }).compile();

    controller = module.get<EsquemasVacunacionController>(EsquemasVacunacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
