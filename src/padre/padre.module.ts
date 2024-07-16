import { Module } from '@nestjs/common';
import { PadreService } from './padre.service';
import { PadreController } from './padre.controller';

@Module({
  controllers: [PadreController],
  providers: [PadreService],
})
export class PadreModule {}
