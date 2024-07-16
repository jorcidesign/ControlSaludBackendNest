import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EsquemasVacunacionService } from './esquemas-vacunacion.service';
import { CreateEsquemasVacunacionDto } from './dto/create-esquemas-vacunacion.dto';
import { UpdateEsquemasVacunacionDto } from './dto/update-esquemas-vacunacion.dto';

@Controller('esquemas-vacunacion')
export class EsquemasVacunacionController {
  constructor(private readonly esquemasVacunacionService: EsquemasVacunacionService) {}

  
  
}
