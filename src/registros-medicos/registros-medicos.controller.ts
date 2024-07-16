import { Controller, Post, Param, Body, UseGuards } from '@nestjs/common';
import { RegistrosMedicosService } from './registros-medicos.service';
import { CreateRegistrosMedicosDto } from './dto/create-registros-medico.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('registros-medicos')
export class RegistrosMedicosController {
  constructor(private readonly registrosMedicosService: RegistrosMedicosService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createRegistros(@Body() createRegistrosMedicosDto: CreateRegistrosMedicosDto) {
    return this.registrosMedicosService.createRegistrosMedicos(createRegistrosMedicosDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete/:id')
  async remove(@Param('id') id: number) {
    return this.registrosMedicosService.removeRegistrosMedicos(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('find-by-perfil/:perfil_paciente_id')
  async findAllByPerfilPacienteId(@Param('perfil_paciente_id') perfil_paciente_id: number) {
    return this.registrosMedicosService.findAllByPerfilPacienteId(perfil_paciente_id);
  }
}