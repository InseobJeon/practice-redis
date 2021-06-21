import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaverSearchModule } from './naver-search/naver-search.module';

@Module({
  imports: [NaverSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
