import { HttpService, Injectable } from '@nestjs/common';
import { promisify } from 'util';
import * as redis from 'redis';
import * as dotenv from 'dotenv';

dotenv.config();

const redisPort = 6379;

const redisClient = redis.createClient(redisPort);
const getAsyncFromRedis = promisify(redisClient.get).bind(redisClient);
const setAsyncToRedis = promisify(redisClient.setex).bind(redisClient);

const { NAVER_CLIENT, NAVER_SECRET } = process.env;
const baseUrl = 'https://openapi.naver.com/v1/search/news.json';
const wantToSee = 100;

@Injectable()
export class NaverSearchService {
  constructor(private httpService: HttpService) {}

  async getSearchResult(keyword: string) {
    try {
      const cachedData = await getAsyncFromRedis(keyword);

      // if cached
      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        return parsed;
      }

      // if not cached
      const { data } = await this.httpService
        .request({
          method: 'get',
          headers: {
            'X-Naver-Client-Id': NAVER_CLIENT,
            'X-Naver-Client-Secret': NAVER_SECRET,
          },
          url: baseUrl,
          params: {
            query: keyword,
            display: wantToSee,
          },
        })
        .toPromise();

      await setAsyncToRedis(keyword, 600, JSON.stringify(data));
      return data;
    } catch (e) {
      throw e;
    }
  }
}
