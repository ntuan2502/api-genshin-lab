import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';

@Module({
  imports: [],
  controllers: [CharacterController],
  providers: [CharacterService, CharacterResolver],
  exports: [],
})
export class CharacterModule {}
