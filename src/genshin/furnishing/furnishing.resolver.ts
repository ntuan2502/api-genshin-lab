import { Args, Query, Resolver } from '@nestjs/graphql';
import { Furnishing } from './furnishing.entity';
import { FurnishingService } from './furnishing.service';

@Resolver(() => Furnishing)
export class FurnishingResolver {
  constructor(private readonly furnishingService: FurnishingService) {}

  @Query(() => [Furnishing])
  furnishing(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.furnishingService.getAllFurnishings(lang);
  }
}
