import { Controller, Post, Param, Body, UseGuards } from '@nestjs/common';
import { PerfilPacientesService } from './perfil-pacientes.service';
import { CreatePerfilPacienteDto } from './dto/create-perfil-paciente.dto';
import { UpdatePerfilPacienteDto } from './dto/update-perfil-paciente.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Controller('perfil-pacientes')
export class PerfilPacientesController {
  constructor(private readonly perfilPacientesService: PerfilPacientesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createPerfilPacienteDto: CreatePerfilPacienteDto) {
    return this.perfilPacientesService.create(createPerfilPacienteDto);
  }
  @UseGuards(JwtAuthGuard)
  @Post('find-by-usuario')
  async findAllByUsuarioId(@Body('usuario_id') usuario_id: number) {
    return this.perfilPacientesService.findAllByUsuarioId(usuario_id);
  }
  @UseGuards(JwtAuthGuard)
  @Post('update/:id')
  async update(@Param('id') id: number, @Body() updatePerfilPacienteDto: UpdatePerfilPacienteDto) {
    return this.perfilPacientesService.update(id, updatePerfilPacienteDto);
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete/:id')
  async remove(@Param('id') id: number) {
    return this.perfilPacientesService.remove(id);
  }
}
