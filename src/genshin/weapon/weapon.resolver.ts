import { Args, Query, Resolver } from '@nestjs/graphql';
import { Weapon } from './weapon.entity';
import { WeaponService } from './weapon.service';

@Resolver(() => Weapon)
export class WeaponResolver {
  constructor(private readonly weaponService: WeaponService) {}

  @Query(() => [Weapon])
  weapons(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.weaponService.getAll(lang);
  }

  @Query(() => Weapon)
  weapon(
    @Args('id', { type: () => String }) id: string,
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any> {
    return this.weaponService.getOne(id, lang);
  }
}
