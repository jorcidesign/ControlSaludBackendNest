import { google } from 'googleapis';
import * as nodemailer from 'nodemailer'; // Cambiado a import * as nodemailer
import * as dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Obtiene las credenciales de las variables de entorno
const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const user = process.env.GMAIL_USER;

if (!clientId || !clientSecret || !refreshToken || !user) {
  throw new Error('Faltan variables de entorno necesarias para la configuración de Nodemailer.');
}

// Configuración de OAuth2 para Nodemailer
const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  'https://developers.google.com/oauthplayground' // URI de redirección para OAuth2
);

// Establece las credenciales del cliente OAuth2
oAuth2Client.setCredentials({
  refresh_token: refreshToken
});

// Verifica si nodemailer.createTransport está disponible
if (!nodemailer.createTransport) {
  throw new Error('nodemailer.createTransport no está disponible.');
}

// Crea y exporta el transportador de nodemailer
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken: async () => (await oAuth2Client.getAccessToken()).token, // Obtén el token de acceso
  }
});
