import { Module } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module.';
import { ArtifactModule } from './artifact/artifact.module.';
import { CharacterModule } from './character/character.module.';
import { FishModule } from './fish/fish.module.';
import { FoodModule } from './food/food.module.';
import { FurnishingModule } from './furnishing/furnishing.module.';
import { MaterialModule } from './material/material.module.';
import { WeaponModule } from './weapon/weapon.module.';

@Module({
  imports: [
    CharacterModule,
    WeaponModule,
    ArtifactModule,
    FoodModule,
    AchievementModule,
    MaterialModule,
    FishModule,
    FurnishingModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class GenshinModule {}
