import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Vacuna } from '../../vacunas/entities/vacuna.entity';
import { PerfilPaciente } from '../../perfil-pacientes/entities/perfil-paciente.entity';

@Entity('esquema_vacunacion')
export class EsquemaVacunacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vacuna, vacuna => vacuna.id, { eager: true })
  vacuna: Vacuna;

  @Column()
  perfil_paciente_id: number;

  @Column({ nullable: true })
  fecha_aplicacion: Date;

  @Column()
  estado: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
