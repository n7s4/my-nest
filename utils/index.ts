import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';

// 获取项目运行环境
export const getEnv = () => {
  return process.env.NODE_ENV || 'dev';
};

// 读取项目配置
export const getConfig = () => {
  const enviroment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${enviroment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file) as Record<string, unknown>;
  return config;
};
