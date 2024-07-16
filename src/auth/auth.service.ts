import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('Validating user:', email); // Log the email being validated
    const user = await this.usuariosService.findByEmail(email);
    if (!user) {
      console.log('User not found'); // Log if the user is not found
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.contrasena);
    console.log('Password valid:', isPasswordValid); // Log if the password is valid
    if (user && isPasswordValid) {
      const { contrasena, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    console.log('Generating JWT for user:', user.email); // Log the email for which JWT is generated
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
