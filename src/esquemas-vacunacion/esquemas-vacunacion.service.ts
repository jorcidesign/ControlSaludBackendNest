import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EsquemaVacunacion } from './entities/esquemas-vacunacion.entity';
import { Vacuna } from '../vacunas/entities/vacuna.entity';

@Injectable()
export class EsquemasVacunacionService {
  constructor(
    @InjectRepository(EsquemaVacunacion)
    private readonly esquemaVacunacionRepository: Repository<EsquemaVacunacion>,
    @InjectRepository(Vacuna)
    private readonly vacunasRepository: Repository<Vacuna>,
  ) {}

  async createEsquema(perfilPacienteId: number, fechaNacimiento: Date): Promise<EsquemaVacunacion[]> {
    const edadMeses = this.calcularEdadEnMeses(fechaNacimiento);
    const todasVacunas = await this.vacunasRepository.find();
    
    const esquemaVacunacion: EsquemaVacunacion[] = todasVacunas.map(vacuna => {
      const estado = vacuna.edad_meses <= edadMeses ? 2 : 0; // 2: Retrasado, 0: Pendiente
      return this.esquemaVacunacionRepository.create({
        vacuna,
        perfil_paciente_id: perfilPacienteId,
        estado,
      });
    });

    return this.esquemaVacunacionRepository.save(esquemaVacunacion);
  }

  async findByPerfilPacienteId(perfilPacienteId: number): Promise<EsquemaVacunacion[]> {
    return this.esquemaVacunacionRepository.find({
      where: { perfil_paciente_id: perfilPacienteId },
      relations: ['vacuna'],
    });
  }

  private calcularEdadEnMeses(fechaNacimiento: Date): number {
    const fechaActual = new Date();
    const anos = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    return anos * 12 + meses;
  }
}
