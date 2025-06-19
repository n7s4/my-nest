import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { FeishuController } from './feishu.controller';
import { FeishuService } from './feishu.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [FeishuController],
  providers: [FeishuService],
})
export class FeishuModule {}
