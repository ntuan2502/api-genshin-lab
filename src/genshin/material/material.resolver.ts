import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  CommonMaterial,
  ElementalStoneMaterial,
  ExpMaterial,
  Ingredients,
  JewelMaterial,
  LocalMaterial,
  Potion,
  TalentLvlUpMaterial,
  WeaponPrimaryMaterial,
  WeaponSecondaryMaterial,
} from './material.entity';
import { MaterialService } from './material.service';

@Resolver(() => CommonMaterial)
export class MaterialResolver {
  constructor(private readonly materialService: MaterialService) {}

  @Query(() => [CommonMaterial])
  commonMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllCommonMaterials(lang);
  }

  @Query(() => [ElementalStoneMaterial])
  elementalStoneMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllElementalStoneMaterials(lang);
  }

  @Query(() => [JewelMaterial])
  jewelsMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllJewelMaterials(lang);
  }

  @Query(() => [LocalMaterial])
  localMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllLocalMaterials(lang);
  }

  @Query(() => [Potion])
  potions(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllPotions(lang);
  }

  @Query(() => [TalentLvlUpMaterial])
  talentLvlUpMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllTalentLvlUpMaterials(lang);
  }

  @Query(() => [WeaponPrimaryMaterial])
  weaponPrimaryMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllWeaponPrimaryMaterials(lang);
  }

  @Query(() => [WeaponSecondaryMaterial])
  weaponSecondaryMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllWeaponSecondaryMaterials(lang);
  }

  @Query(() => [ExpMaterial])
  characterExpMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllCharacterExpMaterials(lang);
  }

  @Query(() => [ExpMaterial])
  weaponExpMaterials(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllWeaponExpMaterials(lang);
  }

  @Query(() => [Ingredients])
  ingredients(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.materialService.getAllIngredients(lang);
  }
}
