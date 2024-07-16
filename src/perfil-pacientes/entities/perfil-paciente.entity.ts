import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('perfil_pacientes')
export class PerfilPaciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  dni: string;

  @Column()
  genero: string;

  @Column()
  edad_anios: number;

  @Column()
  edad_meses: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, usuario => usuario.perfilPacientes)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
