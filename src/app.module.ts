import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FeishuModule } from './user/feishu/feishu.module';
import { CourseModule } from './course/course.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '@/utils';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule,
    FeishuModule,
    CourseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
