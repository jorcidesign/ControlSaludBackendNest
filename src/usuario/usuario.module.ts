// src/usuarios/usuarios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuario.service';
import { UsuariosController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { Padre } from 'src/padre/entities/padre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Padre])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService], 
})
export class UsuariosModule {}