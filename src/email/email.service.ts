import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Email } from './entities/email.entity';
import { transporter } from '../nodemailer.config';
import { CreateEmailDto } from './dto/create-email.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {}

  async sendTestEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const fromEmail = '"Te recuerda AppSalud 🧑‍⚕️❤️‍🩹" <app.controlsalud@gmail.com>';
    const subject = 'Recordatorio!! 🔔🔔';
    const { to_email, text, usuario_id, perfil_paciente_id } = createEmailDto;

    this.logger.debug(`Received DTO: ${JSON.stringify(createEmailDto)}`);

    // Verificar que to_email no esté vacío
    if (!to_email) {
      throw new Error('Recipient email address (to_email) is required');
    }

    const mailOptions = {
      from: fromEmail,
      to: to_email,
      subject: subject,
      text: text,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      this.logger.debug('Email sent successfully');

      // Guardar el correo en la base de datos
      const email = new Email();
      email.from_email = fromEmail;
      email.to_email = to_email;
      email.subject = subject;
      email.text = text;
      email.usuario = { id: usuario_id } as any; // Relacionar con el usuario
      email.perfilPaciente = { id: perfil_paciente_id } as any; // Relacionar con el perfil paciente

      this.logger.debug(`Email entity to be saved: ${JSON.stringify(email)}`);

      await this.emailRepository.save(email);
      this.logger.debug('Email saved successfully in the database');

      // Retornar mensaje de éxito
      return 'Envío de correo exitoso';
    } catch (error) {
      this.logger.error('Failed to send email or save it in the database', error.stack);
      throw error;
    }
  }
}
