import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosMedicosDto } from './create-datos-medico.dto';

export class UpdateDatosMedicosDto extends PartialType(CreateDatosMedicosDto) {}
