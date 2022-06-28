import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FishService } from './fish.service';

@ApiTags('fishes')
@Controller('fish')
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @Get()
  async findAll(@Query('language') language: string): Promise<any> {
    return this.fishService.getAllBaits(language);
  }
}
