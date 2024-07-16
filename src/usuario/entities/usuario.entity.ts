import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Padre } from 'src/padre/entities/padre.entity';
import { PerfilPaciente } from '../../perfil-pacientes/entities/perfil-paciente.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  contrasena: string;

  @ManyToOne(() => Padre, (padre) => padre.usuarios, { nullable: true })
  @JoinColumn({ name: 'padre_id' })
  padre: Padre;

  @OneToMany(() => PerfilPaciente, perfilPaciente => perfilPaciente.usuario)
  perfilPacientes: PerfilPaciente[];
}
