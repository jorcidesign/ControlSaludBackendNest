import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  async sendTestEmail(@Body() createEmailDto: CreateEmailDto): Promise<string> {
    return this.emailService.sendTestEmail(createEmailDto);
  }
}
