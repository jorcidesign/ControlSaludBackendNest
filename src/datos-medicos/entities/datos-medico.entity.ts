import { Entity, Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { RegistrosMedicos } from 'src/registros-medicos/entities/registros-medico.entity'; 

@Entity('datos_medicos')
export class DatosMedicos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peso: number;

  @Column()
  talla: number;

  @Column()
  registro_medico_id: number;

  @OneToOne(() => RegistrosMedicos, registrosMedicos => registrosMedicos.datosMedicos)
  @JoinColumn({ name: 'registro_medico_id' })
  registrosMedicos: RegistrosMedicos;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
