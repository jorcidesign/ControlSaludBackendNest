import { Injectable } from '@nestjs/common';
import { CreateImcDto } from './dto/create-imc.dto';
import { UpdateImcDto } from './dto/update-imc.dto';

@Injectable()
export class ImcService {
  create(createImcDto: CreateImcDto) {
    return 'This action adds a new imc';
  }

  findAll() {
    return `This action returns all imc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imc`;
  }

  update(id: number, updateImcDto: UpdateImcDto) {
    return `This action updates a #${id} imc`;
  }

  remove(id: number) {
    return `This action removes a #${id} imc`;
  }
}
