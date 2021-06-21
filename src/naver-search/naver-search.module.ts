import { HttpModule, Module } from '@nestjs/common';
import { NaverSearchService } from './naver-search.service';
import { NaverSearchController } from './naver-search.controller';

@Module({
  imports: [HttpModule],
  controllers: [NaverSearchController],
  providers: [NaverSearchService],
})
export class NaverSearchModule {}
