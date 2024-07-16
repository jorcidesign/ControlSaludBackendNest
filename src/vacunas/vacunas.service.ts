import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { Vacuna } from './entities/vacuna.entity';


@Injectable()
export class VacunasService {
  constructor(
    @InjectRepository(Vacuna)
    private readonly vacunasRepository: Repository<Vacuna>,
  ) {}

  async findAll(): Promise<Vacuna[]> {
    return this.vacunasRepository.find();
  }

}
