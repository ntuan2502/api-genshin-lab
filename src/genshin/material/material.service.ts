import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class MaterialService {
  //   constructor();

  async getAllCommonMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const commonMaterials = await genshinData.commonMaterials();

    return commonMaterials;
  }

  async getAllElementalStoneMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const elementalStoneMaterials = await genshinData.elementalStoneMaterials();

    return elementalStoneMaterials;
  }

  async getAllJewelMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const jewelsMaterials = await genshinData.jewelsMaterials();

    return jewelsMaterials;
  }

  async getAllLocalMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const localMaterials = await genshinData.localMaterials();

    return localMaterials;
  }

  async getAllPotions(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const potions = await genshinData.potions();

    return potions;
  }

  async getAllTalentLvlUpMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const talentLvlUpMaterials = await genshinData.talentLvlUpMaterials();

    return talentLvlUpMaterials;
  }

  async getAllWeaponPrimaryMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weaponPrimaryMaterials = await genshinData.weaponPrimaryMaterials();

    return weaponPrimaryMaterials;
  }

  async getAllWeaponSecondaryMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weaponSecondaryMaterials =
      await genshinData.weaponSecondaryMaterials();

    return weaponSecondaryMaterials;
  }

  async getAllCharacterExpMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const characterExpMaterials = await genshinData.characterExpMaterials();

    return characterExpMaterials;
  }

  async getAllWeaponExpMaterials(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weaponExpMaterials = await genshinData.weaponExpMaterials();

    return weaponExpMaterials;
  }

  async getAllIngredients(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const ingredients = await genshinData.ingredients();

    return ingredients;
  }
}
