import { Module } from '@nestjs/common';
import { FoodResolver } from './food.resolver';
import { FoodService } from './food.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FoodService, FoodResolver],
  exports: [],
})
export class FoodModule {}
