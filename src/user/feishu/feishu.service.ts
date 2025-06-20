import { Inject, Injectable } from '@nestjs/common';
import { getAppToken } from 'src/helper/feishu/auth';
import { Cache } from 'cache-manager';
import { BusinessException } from '@/common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { messages } from '@/helper/feishu/message';

@Injectable()
export class FeishuService {
  private APP_TOKEN_CACHE_KEY: string;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService,
  ) {
    const cacheKey = this.configService.get<string>('APP_TOKEN_CACHE_KEY');
    if (!cacheKey) {
      throw new Error('APP_TOKEN_CACHE_KEY not configured');
    }
    this.APP_TOKEN_CACHE_KEY = cacheKey;
  }

  async getAppToken(): Promise<string> {
    try {
      let appToken = await this.cacheManager.get<string>(
        this.APP_TOKEN_CACHE_KEY,
      );
      console.log('从缓存获取的 token:', appToken);

      if (!appToken) {
        const response = await getAppToken();
        if (response.code === 0) {
          appToken = response.app_access_token;
          console.log('获取新的 token:', appToken);

          // 设置缓存
          await this.cacheManager.set(
            this.APP_TOKEN_CACHE_KEY,
            appToken,
            response.expire - 60,
          );

          // 测试缓存是否设置成功
          const cachedToken = await this.cacheManager.get<string>(
            this.APP_TOKEN_CACHE_KEY,
          );
          console.log('缓存设置后立即读取:', cachedToken);
        } else {
          throw new BusinessException('飞书调用异常');
        }
      }

      if (!appToken) {
        throw new BusinessException('获取飞书 token 失败');
      }
      return appToken;
    } catch (error) {
      console.error('获取 token 时发生错误:', error);
      throw new BusinessException('获取飞书 token 失败');
    }
  }

  async sendMessage(receive_id_type: string, params: Record<string, unknown>) {
    const app_token = await this.getAppToken();
    return messages(receive_id_type, params, app_token);
  }
}
