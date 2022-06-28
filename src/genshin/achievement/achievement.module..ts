import { Module } from '@nestjs/common';
import { AchievementController } from './achievement.controller';
import { AchievementResolver } from './achievement.resolver';
import { AchievementService } from './achievement.service';

@Module({
  imports: [],
  controllers: [AchievementController],
  providers: [AchievementService, AchievementResolver],
  exports: [],
})
export class AchievementModule {}
