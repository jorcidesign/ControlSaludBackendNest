import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { PerfilPaciente } from '../../perfil-pacientes/entities/perfil-paciente.entity';
import { DatosMedicos } from 'src/datos-medicos/entities/datos-medico.entity';

@Entity('registros_medicos')
export class RegistrosMedicos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  perfil_paciente_id: number;

  @ManyToOne(() => PerfilPaciente)
  @JoinColumn({ name: 'perfil_paciente_id' })
  perfilPaciente: PerfilPaciente;

  @OneToOne(() => DatosMedicos, datosMedicos => datosMedicos.registrosMedicos)
  datosMedicos: DatosMedicos;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
