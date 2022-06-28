import { Args, Query, Resolver } from '@nestjs/graphql';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@Resolver(() => Food)
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Query(() => [Food])
  foods(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.foodService.getAll(lang);
  }

  @Query(() => Food)
  food(
    @Args('id', { type: () => String }) id: string,
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any> {
    return this.foodService.getOne(id, lang);
  }
}
