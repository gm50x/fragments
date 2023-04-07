import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UseHeimdal } from '@gedai/heimdall';

@Controller()
@UseHeimdal()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
