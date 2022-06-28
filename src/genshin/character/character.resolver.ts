import { Args, Query, Resolver } from '@nestjs/graphql';
import { Character } from './character.entity';
import { CharacterService } from './character.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character])
  characters(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.characterService.getAll(lang);
  }

  @Query(() => Character)
  character(
    @Args('id', { type: () => String }) id: string,
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any> {
    return this.characterService.getOne(id, lang);
  }
}
