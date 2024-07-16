import { PartialType } from '@nestjs/mapped-types';
import { CreateEsquemasVacunacionDto } from './create-esquemas-vacunacion.dto';

export class UpdateEsquemasVacunacionDto extends PartialType(CreateEsquemasVacunacionDto) {}
