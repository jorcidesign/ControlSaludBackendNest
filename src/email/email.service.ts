import { Injectable, Logger } from '@nestjs/common';
import { transporter } from '../nodemailer.config'; // Asegúrate de que la ruta sea correcta
import { CreateEmailDto } from './dto/create-email.dto'; // Asegúrate de que el DTO esté configurado correctamente

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  async sendTestEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const fromEmail = '"Te recuerda AppSalud 🧑‍⚕️❤️‍🩹" <app.controlsalud@gmail.com>';
    const subject = 'Recordatorio!! 🔔🔔';
    const { to_email, text } = createEmailDto;

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

      // Retornar mensaje de éxito
      return 'Envío de correo exitoso';
    } catch (error) {
      this.logger.error('Failed to send email', error.stack);
      throw new Error('Failed to send email');
    }
  }
}
