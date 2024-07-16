import { CreatePadreDto } from "src/padre/dto/create-padre.dto";

export class CreateUsuarioDto {
    email: string;
    contrasena: string;
    padre: CreatePadreDto;
  }

