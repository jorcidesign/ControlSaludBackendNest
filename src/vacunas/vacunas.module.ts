import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacunasService } from './vacunas.service';
import { Vacuna } from './entities/vacuna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacuna])],
  providers: [VacunasService],
  exports: [VacunasService],
})
export class VacunasModule {}
