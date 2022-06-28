import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';
import { FishResolver } from './fish.resolver';
import { FishService } from './fish.service';

@Module({
  imports: [],
  controllers: [FishController],
  providers: [FishService, FishResolver],
  exports: [],
})
export class FishModule {}
