import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FurnishingService } from './furnishing.service';

@ApiTags('furnishings')
@Controller('furnishing')
export class FurnishingController {
  constructor(private readonly furnishingService: FurnishingService) {}

  @Get()
  async findAll(@Query('language') language: string): Promise<any> {
    return this.furnishingService.getAllFurnishings(language);
  }
}
