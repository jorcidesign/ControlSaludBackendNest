import { Module } from '@nestjs/common';
import { DatosMedicosService } from './datos-medicos.service';
import { DatosMedicosController } from './datos-medicos.controller';

@Module({
  controllers: [DatosMedicosController],
  providers: [DatosMedicosService],
})
export class DatosMedicosModule {}
