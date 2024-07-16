import { Injectable } from '@nestjs/common';
import { CreateDatosMedicosDto } from './dto/create-datos-medico.dto';
import { UpdateDatosMedicosDto } from './dto/update-datos-medico.dto';

@Injectable()
export class DatosMedicosService {
  create(createDatosMedicoDto: CreateDatosMedicosDto) {
    return 'This action adds a new datosMedico';
  }

  findAll() {
    return `This action returns all datosMedicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosMedico`;
  }

  update(id: number, updateDatosMedicoDto: UpdateDatosMedicosDto) {
    return `This action updates a #${id} datosMedico`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosMedico`;
  }
}
