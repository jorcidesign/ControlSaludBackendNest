import { CreateDatosMedicosDto } from "src/datos-medicos/dto/create-datos-medico.dto";

export class CreateRegistrosMedicosDto {
  fecha: Date;
  perfil_paciente_id: number;
  datos_medicos: CreateDatosMedicosDto;
}
