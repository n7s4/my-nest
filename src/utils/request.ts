import axios, { Method } from 'axios';
import { getConfig } from './index';

const {
  FEISHU_CONFIG: { FEISHU_URL },
} = getConfig();

/**
 * @description: 任意请求
 */
const request = async ({ url, option = {} }: { url: string; option?: any }) => {
  return axios.request({
    url,
    ...option,
  });
};

interface IMethodV {
  url: string;
  method?: Method;
  headers?: { [key: string]: string };
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export interface IRequest {
  data: any;
  code: number;
}

/**
 * @description: 带 version 的通用 api 请求
 * 如果传入的是完整 URL（以 http:// 或 https:// 开头），直接使用；否则自动拼接飞书的基础 URL
 */
const methodV = async ({
  url,
  method,
  headers,
  params = {},
  query = {},
}: IMethodV): Promise<IRequest> => {
  let sendUrl = '';
  if (/^(http:\/\/|https:\/\/)/.test(url)) {
    sendUrl = url;
  } else {
    sendUrl = `${FEISHU_URL}${url}`;
  }
  console.log('sendUrl', sendUrl);
  return axios({
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    url: sendUrl,
    method,
    params: query,
    data: {
      ...params,
    },
  })
    .then(({ data, status }) => ({ data, code: status }))
    .catch((error) => {
      throw error instanceof Error ? error : new Error(String(error));
    });
};

export { request, methodV };
