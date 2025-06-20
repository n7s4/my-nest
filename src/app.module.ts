import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { ConfigFactory, ConfigModule } from '@nestjs/config';
import { getConfig } from '@/utils';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    UserModule,
    CourseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig as ConfigFactory],
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getConfig('REDIS_CONFIG').host,
      port: getConfig('REDIS_CONFIG').port,
      auth_pass: getConfig('REDIS_CONFIG').auth,
      db: getConfig('REDIS_CONFIG').db,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
