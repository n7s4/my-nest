import { DataSourceOptions } from 'typeorm';
export type MONGODB_CONFIG_TYPE = {
  name: string;
  type: DataSourceOptions['type'];
  url: string;
  username: string;
  password: string | number;
  database: string;
  logging: boolean;
  synchronize: boolean;
};

export type MYSQL_CONFIG_TYPE = {
  name: string;
  type: DataSourceOptions['type'];
  url: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string;
  synchronize: true;
};

export type REDIS_CONFIG_TYPE = {
  host: string;
  port: number;
  auth: string;
  db: number;
};

export type TEST_VALUE_TYPE = {
  name: string;
};

export type FEISHU_CONFIG = {
  FEISHU_URL: string;
  FEISHU_API_HOST: string;
  FEISHU_APP_ID: string;
  FEISHU_APP_SECRET: string;
};
export type APP_TOKEN_CACHE_KEY = string;
// 所有类型的子类型集合
export type YamlConfigType = MONGODB_CONFIG_TYPE &
  MYSQL_CONFIG_TYPE &
  REDIS_CONFIG_TYPE &
  FEISHU_CONFIG &
  APP_TOKEN_CACHE_KEY &
  TEST_VALUE_TYPE;
