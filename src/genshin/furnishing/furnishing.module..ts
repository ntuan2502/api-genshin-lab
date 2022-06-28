import { Module } from '@nestjs/common';
import { FurnishingController } from './furnishing.controller';
import { FurnishingResolver } from './furnishing.resolver';
import { FurnishingService } from './furnishing.service';

@Module({
  imports: [],
  controllers: [FurnishingController],
  providers: [FurnishingService, FurnishingResolver],
  exports: [],
})
export class FurnishingModule {}
