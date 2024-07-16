import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacunasService } from './vacunas.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';

@Controller('vacunas')
export class VacunasController {
  constructor(private readonly vacunasService: VacunasService) {}

  
}
