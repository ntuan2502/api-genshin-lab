import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CharacterService } from './character.service';

@ApiTags('characters')
@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async findAll(@Query('language') language: string): Promise<any> {
    return this.characterService.findAll(language);
  }

  @Get(':id')
  @ApiQuery({
    name: 'language',
    required: false,
    type: String,
  })
  async findOne(
    @Param('id') id: string,
    @Query('language') language: string,
  ): Promise<any> {
    return this.characterService.findOne(id, language);
  }
}
