import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuario/usuario.module';
import { PerfilPacientesModule } from './perfil-pacientes/perfil-pacientes.module';
import { RegistrosMedicosModule } from './registros-medicos/registros-medicos.module';
import { DatosMedicosModule } from './datos-medicos/datos-medicos.module';
import { VacunasModule } from './vacunas/vacunas.module';
import { EsquemasVacunacionModule } from './esquemas-vacunacion/esquemas-vacunacion.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ImcModule } from './imc/imc.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Reemplaza con tu usuario de PostgreSQL
      password: 'new_password', // Reemplaza con tu contraseña de PostgreSQL
      database: 'software_control_salud', // Reemplaza con tu nombre de base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsuariosModule,
    PerfilPacientesModule,
    RegistrosMedicosModule,
    DatosMedicosModule,
    VacunasModule,
    EsquemasVacunacionModule,
    NotificacionesModule,
    AuthModule,
    CommonModule,
    ImcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
