import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrosMedicosDto } from './create-registros-medico.dto';

export class UpdateRegistrosMedicosDto extends PartialType(CreateRegistrosMedicosDto) {}
