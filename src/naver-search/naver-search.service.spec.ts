import { Test, TestingModule } from '@nestjs/testing';
import { NaverSearchService } from './naver-search.service';

describe('NaverSearchService', () => {
  let service: NaverSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaverSearchService],
    }).compile();

    service = module.get<NaverSearchService>(NaverSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
