import { Args, Query, Resolver } from '@nestjs/graphql';
import { Bait, Fish, FishingRod } from './fish.entity';
import { FishService } from './fish.service';

@Resolver(() => Fish)
export class FishResolver {
  constructor(private readonly fishService: FishService) {}

  @Query(() => [Fish])
  fish(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.fishService.getAllFish(lang);
  }

  @Query(() => [FishingRod])
  fishingRods(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.fishService.getAllFishingRods(lang);
  }

  @Query(() => [Bait])
  baits(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.fishService.getAllBaits(lang);
  }
}
