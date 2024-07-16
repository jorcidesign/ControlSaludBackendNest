import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrosMedicosService } from './registros-medicos.service';
import { RegistrosMedicosController } from './registros-medicos.controller';
import { RegistrosMedicos } from './entities/registros-medico.entity';
import { DatosMedicos } from 'src/datos-medicos/entities/datos-medico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrosMedicos, DatosMedicos])],
  controllers: [RegistrosMedicosController],
  providers: [RegistrosMedicosService],
})
export class RegistrosMedicosModule {}
