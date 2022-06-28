import { Args, Query, Resolver } from '@nestjs/graphql';
import { AchievementCategory } from './achievement.entity';
import { AchievementService } from './achievement.service';

@Resolver(() => AchievementCategory)
export class AchievementResolver {
  constructor(private readonly achievementService: AchievementService) {}

  @Query(() => [AchievementCategory])
  achievementCategories(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.achievementService.getAll(lang);
  }

  @Query(() => AchievementCategory)
  achievementCategory(
    @Args('id', { type: () => String }) id: string,
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any> {
    return this.achievementService.getOne(id, lang);
  }
}
