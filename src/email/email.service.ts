import { Injectable, Logger } from '@nestjs/common';
import { transporter } from '../nodemailer.config'; // Asegúrate de que la ruta sea correcta
import { CreateEmailDto } from './dto/create-email.dto'; // Asegúrate de que el DTO esté configurado correctamente
import * as path from 'path';
@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  async sendTestEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const fromEmail = '"Te recuerda AppSalud 🧑‍⚕️❤️‍🩹" <app.controlsalud@gmail.com>';
    const subject = 'Recordatorio!! 🔔🔔';
    const { to_email } = createEmailDto;

    this.logger.debug(`Received DTO: ${JSON.stringify(createEmailDto)}`);

    // Verificar que to_email no esté vacío
    if (!to_email) {
      throw new Error('Recipient email address (to_email) is required');
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              /* Tu estilo aquí */
          </style>
      </head>
      <body>
          <div style="width: 100%; background-color: #25C7D9;">
              <div style="padding: 20px 10px 20px 10px;">
                  <!-- Imagen inicial -->
                  <div style="background-color: #F2F2F2; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                      <img src="cid:logo" alt="" style="width: 70px; height: 60px;">
                  </div>
                  <!-- Imagen inicial -->

                  <!-- Contenido principal -->
                  <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                      <h1>Recordatorio de Vacuna</h1>
                      <p>Estimado usuario,</p>
                      <p>Este es un recordatorio para tu próxima vacuna:</p>
                      <p><strong>Vacuna:</strong> {{vacuna}}</p>
                      <p><strong>Fecha:</strong> {{fecha}}</p>
                      <p>Por favor, asegúrate de asistir a tu cita.</p>

                      <!-- Gracias -->
                      <p>Gracias por tu atención.</p>
                      <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo AppSalud</p>

                      <!-- Botón -->
                      <a class="claseBoton" href="https://www.google.com/">AppSalud</a>
                  </div>
                  <!-- Contenido principal -->

                  <!-- Footer -->
                  <div style="background-color: #21C0E0; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                      <!-- Redes sociales -->
                      <a href="https://www.google.com" class="contA"><img src="cid:fb" class="imag" style="width: 30px; height: 30px;"/></a>
                      <a href="https://www.google.com" class="contA"><img src="cid:ig" class="imag" style="width: 30px; height: 30px;"/></a>
                      <a href="https://www.google.com" class="contA"><img src="cid:wp" class="imag" style="width: 30px; height: 30px;"/></a>
                      <a href="https://www.google.com" class="contA"><img src="cid:tg" class="imag" style="width: 30px; height: 30px;"/></a>
                      <!-- Redes sociales -->

                      <h4>Soporte</h4>
                      <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                          Comunícate con nosotros por los siguientes medios:<br>
                          Correo: <a class="afooter" href="mailto:app.controlsalud@gmail.com">app.controlsalud@gmail.com</a><br>
                          Whatsapp: <a class="afooter" href="https://wa.me/51999999999">+51999999999</a><br>
                      </p>
                      <p style="background-color: #7CBF69; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                          © 2024 AppSalud, todos los derechos reservados.
                      </p>
                  </div>
                  <!-- Footer -->
              </div>
          </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: fromEmail,
      to: to_email,
      subject: subject,
      html: htmlContent,
      attachments: [
        {
          filename: 'logoSoftwareControlSalud-transformed.png',
          path: path.join(process.cwd(), 'src', 'img', 'logoSoftwareControlSalud-transformed.png'),
          cid: 'logo' // cid:logo en el HTML
        },
        {
          filename: 'facebook.png',
          path: path.join(process.cwd(), 'src', 'img', 'facebook.png'),
          cid: 'fb' // cid:fb en el HTML
        },
        {
          filename: 'instagram.png',
          path: path.join(process.cwd(), 'src', 'img', 'instagram.png'),
          cid: 'ig' // cid:ig en el HTML
        },
        {
          filename: 'whatsapp.png',
          path: path.join(process.cwd(), 'src', 'img', 'whatsapp.png'),
          cid: 'wp' // cid:wp en el HTML
        },
        {
          filename: 'telegrama.png',
          path: path.join(process.cwd(), 'src', 'img', 'telegrama.png'),
          cid: 'tg' // cid:tg en el HTML
        }
      ]
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      this.logger.debug('Email sent successfully');

      // Retornar mensaje de éxito
      return 'Envío de correo exitoso';
    } catch (error) {
      this.logger.error('Failed to send email', error.stack);
      throw error;
    }
  }
}
