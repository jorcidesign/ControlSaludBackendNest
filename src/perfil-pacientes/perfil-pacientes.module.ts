import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilPacientesService } from './perfil-pacientes.service';
import { PerfilPacientesController } from './perfil-pacientes.controller';
import { PerfilPaciente } from './entities/perfil-paciente.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilPaciente, Usuario])],
  controllers: [PerfilPacientesController],
  providers: [PerfilPacientesService],
})
export class PerfilPacientesModule {}
