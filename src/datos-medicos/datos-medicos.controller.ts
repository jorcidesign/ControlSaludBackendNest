import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosMedicosService } from './datos-medicos.service';
import { CreateDatosMedicosDto } from './dto/create-datos-medico.dto';
import { UpdateDatosMedicosDto } from './dto/update-datos-medico.dto';

@Controller('datos-medicos')
export class DatosMedicosController {
  constructor(private readonly datosMedicosService: DatosMedicosService) {}

  @Post()
  create(@Body() createDatosMedicosDto: CreateDatosMedicosDto) {
    return this.datosMedicosService.create(createDatosMedicosDto);
  }

  @Get()
  findAll() {
    return this.datosMedicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosMedicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosMedicoDto: UpdateDatosMedicosDto) {
    return this.datosMedicosService.update(+id, updateDatosMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosMedicosService.remove(+id);
  }
}
