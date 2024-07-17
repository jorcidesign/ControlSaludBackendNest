import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { PerfilPaciente } from 'src/perfil-pacientes/entities/perfil-paciente.entity';

@Entity('emails') // Aseguramos el nombre correcto de la tabla
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from_email: string;

  @Column()
  to_email: string;

  @Column()
  subject: string;

  @Column('text')
  text: string;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => PerfilPaciente, { nullable: true })
  @JoinColumn({ name: 'perfil_paciente_id' })
  perfilPaciente: PerfilPaciente;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
