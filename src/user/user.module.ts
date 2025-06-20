import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '@/common/database/database.module';
import { FeishuController } from './feishu/feishu.controller';
import { UserProviders } from './user.providers';
import { FeishuService } from './feishu/feishu.service';

@Module({
  imports: [CacheModule.register(), DatabaseModule],
  controllers: [UserController, FeishuController],
  providers: [UserService, ...UserProviders, FeishuService],
  exports: [UserService],
})
export class UserModule {}
