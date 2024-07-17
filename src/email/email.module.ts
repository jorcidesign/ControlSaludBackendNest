import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { Email } from './entities/email.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { PerfilPaciente } from 'src/perfil-pacientes/entities/perfil-paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Email, Usuario, PerfilPaciente])],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
