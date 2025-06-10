import { Controller, Get } from '@nestjs/common';
import { AppService, TestService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest(): string {
    return this.testService.getTest();
  }
}
