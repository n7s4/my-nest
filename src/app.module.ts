import { Module } from '@nestjs/common';
import { AppController, TestController } from './app.controller';
import { AppService, TestService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}
