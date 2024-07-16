import { PartialType } from '@nestjs/mapped-types';
import { CreateImcDto } from './create-imc.dto';

export class UpdateImcDto extends PartialType(CreateImcDto) {}
