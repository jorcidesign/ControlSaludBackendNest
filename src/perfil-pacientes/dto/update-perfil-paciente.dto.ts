import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilPacienteDto } from './create-perfil-paciente.dto';

export class UpdatePerfilPacienteDto extends PartialType(CreatePerfilPacienteDto) {
  usuario_id?: never;
}
