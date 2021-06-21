import { Test, TestingModule } from '@nestjs/testing';
import { NaverSearchController } from './naver-search.controller';
import { NaverSearchService } from './naver-search.service';

describe('NaverSearchController', () => {
  let controller: NaverSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaverSearchController],
      providers: [NaverSearchService],
    }).compile();

    controller = module.get<NaverSearchController>(NaverSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
