import { Body, Controller, Post } from '@nestjs/common';
import { NaverSearchService } from './naver-search.service';

@Controller('naver-search')
export class NaverSearchController {
  constructor(private readonly naverSearchService: NaverSearchService) {}

  @Post()
  async getSearchResult(@Body('keyword') keyword: string) {
    console.log(keyword);
    return await this.naverSearchService.getSearchResult(keyword);
  }
}
