import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EsquemasVacunacionService } from './esquemas-vacunacion.service';
import { EsquemaVacunacion } from './entities/esquemas-vacunacion.entity';
import { Vacuna } from '../vacunas/entities/vacuna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EsquemaVacunacion, Vacuna])],
  providers: [EsquemasVacunacionService],
  exports: [EsquemasVacunacionService],
})
export class EsquemasVacunacionModule {}