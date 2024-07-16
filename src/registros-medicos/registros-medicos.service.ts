import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrosMedicosDto } from './dto/create-registros-medico.dto';
import { CreateDatosMedicosDto } from 'src/datos-medicos/dto/create-datos-medico.dto';
import { RegistrosMedicos } from './entities/registros-medico.entity';
import { DatosMedicos } from 'src/datos-medicos/entities/datos-medico.entity';

@Injectable()
export class RegistrosMedicosService {
  constructor(
    @InjectRepository(RegistrosMedicos)
    private readonly registrosMedicosRepository: Repository<RegistrosMedicos>,
    @InjectRepository(DatosMedicos)
    private readonly datosMedicosRepository: Repository<DatosMedicos>,
  ) {}

  async createRegistrosMedicos(createRegistrosMedicosDto: CreateRegistrosMedicosDto): Promise<RegistrosMedicos> {
    const { datos_medicos, ...registrosMedicosData } = createRegistrosMedicosDto;

    const registrosMedicos = this.registrosMedicosRepository.create(registrosMedicosData);
    await this.registrosMedicosRepository.save(registrosMedicos);

    const datosMedicos = this.datosMedicosRepository.create({
      ...datos_medicos,
      registro_medico_id: registrosMedicos.id,
    });
    await this.datosMedicosRepository.save(datosMedicos);

    return this.registrosMedicosRepository.findOne({
      where: { id: registrosMedicos.id },
      relations: ['datosMedicos'],
    });
  }

  async removeRegistrosMedicos(id: number): Promise<{ message: string }> {
    const registrosMedicos = await this.registrosMedicosRepository.findOne({ where: { id }, relations: ['datosMedicos'] });
    if (!registrosMedicos) {
      throw new NotFoundException('Registro Médico no encontrado');
    }
    if (registrosMedicos.datosMedicos) {
      await this.datosMedicosRepository.remove(registrosMedicos.datosMedicos);
    }
    await this.registrosMedicosRepository.remove(registrosMedicos);
    return { message: `Registro Médico con ID ${id} eliminado exitosamente` };
  }

  async findAllByPerfilPacienteId(perfil_paciente_id: number): Promise<RegistrosMedicos[]> {
    return this.registrosMedicosRepository.find({
      where: { perfil_paciente_id },
      relations: ['datosMedicos'],
    });
  }
}
