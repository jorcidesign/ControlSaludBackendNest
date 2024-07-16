import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from './entities/usuario.entity';
import { Padre } from 'src/padre/entities/padre.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    @InjectRepository(Padre)
    private padresRepository: Repository<Padre>,
  ) {}

  async findByEmail(email: string): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { id }, relations: ['padre'] });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { email, contrasena, padre } = createUsuarioDto;
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    console.log('Hashed password:', hashedPassword); // Log the hashed password
    const nuevoPadre = this.padresRepository.create(padre);
    const padreGuardado = await this.padresRepository.save(nuevoPadre);

    const nuevoUsuario = this.usuariosRepository.create({
      email,
      contrasena: hashedPassword,
      padre: padreGuardado,
    });

    return this.usuariosRepository.save(nuevoUsuario);
  }
}