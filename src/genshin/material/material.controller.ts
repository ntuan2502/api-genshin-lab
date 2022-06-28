import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MaterialService } from './material.service';

@ApiTags('materials')
@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  async findAll(@Query('language') language: string): Promise<any> {
    return this.materialService.getAllLocalMaterials(language);
  }
}
