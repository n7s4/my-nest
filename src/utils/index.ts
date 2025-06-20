import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';
import { YamlConfigType } from '@/types/config';

// 获取项目运行环境
export const getEnv = () => {
  return process.env.NODE_ENV || 'dev';
};

// 读取项目配置
export const getConfig = (type?: string) => {
  const enviroment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${enviroment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file) as Partial<YamlConfigType>;
  if (type) {
    return config[type] as Partial<YamlConfigType>;
  }
  return config;
};
