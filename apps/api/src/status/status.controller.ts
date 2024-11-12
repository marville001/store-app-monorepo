import { Controller, Get } from '@nestjs/common';

@Controller('status')
export class StatusController {
  @Get()
  findAll() {
    return {
      status: 'ok',
      message: 'API is running',
    };
  }
}
