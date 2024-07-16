import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePerfilPacienteDto } from './dto/create-perfil-paciente.dto';
import { UpdatePerfilPacienteDto } from './dto/update-perfil-paciente.dto';
import { PerfilPaciente } from './entities/perfil-paciente.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class PerfilPacientesService {
  constructor(
    @InjectRepository(PerfilPaciente)
    private readonly perfilPacientesRepository: Repository<PerfilPaciente>,
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createPerfilPacienteDto: CreatePerfilPacienteDto): Promise<PerfilPaciente> {
    const usuario = await this.usuariosRepository.findOne({ where: { id: createPerfilPacienteDto.usuario_id } });
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    const perfilPaciente = this.perfilPacientesRepository.create({
      ...createPerfilPacienteDto,
      usuario,
    });
    return this.perfilPacientesRepository.save(perfilPaciente);
  }

  
  async findAllByUsuarioId(usuario_id: number): Promise<PerfilPaciente[]> {
    return this.perfilPacientesRepository.find({
      where: { usuario_id },
      relations: ['usuario'],
    });
  }

  async update(id: number, updatePerfilPacienteDto: UpdatePerfilPacienteDto): Promise<PerfilPaciente> {
    const perfilPaciente = await this.perfilPacientesRepository.findOne({ where: { id }, relations: ['usuario'] });
    if (!perfilPaciente) {
      throw new NotFoundException('Perfil de paciente no encontrado');
    }

    // Excluir usuario_id del proceso de actualización
    const { usuario_id, ...updateData } = updatePerfilPacienteDto;
    Object.assign(perfilPaciente, updateData);
    return this.perfilPacientesRepository.save(perfilPaciente);
  }

  async remove(id: number): Promise<{ message: string }> {
    const perfilPaciente = await this.perfilPacientesRepository.findOne({ where: { id } });
    if (!perfilPaciente) {
      throw new NotFoundException('Perfil de paciente no encontrado');
    }
    await this.perfilPacientesRepository.remove(perfilPaciente);
    return { message: `Perfil de paciente con ID ${id} eliminado exitosamente` };
  }
}
