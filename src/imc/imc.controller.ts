import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImcService } from './imc.service';
import { CreateImcDto } from './dto/create-imc.dto';
import { UpdateImcDto } from './dto/update-imc.dto';

@Controller('imc')
export class ImcController {
  constructor(private readonly imcService: ImcService) {}

  @Post()
  create(@Body() createImcDto: CreateImcDto) {
    return this.imcService.create(createImcDto);
  }

  @Get()
  findAll() {
    return this.imcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImcDto: UpdateImcDto) {
    return this.imcService.update(+id, updateImcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imcService.remove(+id);
  }
}
