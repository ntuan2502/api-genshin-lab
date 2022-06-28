import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AchievementService } from './achievement.service';

@ApiTags('achievements')
@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get()
  async findAll(@Query('language') language: string): Promise<any> {
    return this.achievementService.getAll(language);
  }
}
