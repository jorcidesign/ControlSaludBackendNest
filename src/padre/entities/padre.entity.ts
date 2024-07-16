import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity('padres')
export class Padre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dni: string;

  @Column()
  genero: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @OneToMany(() => Usuario, (usuario) => usuario.padre)
  usuarios: Usuario[];
}