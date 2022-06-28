import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class WeaponService {
  //   constructor();

  async getAll(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weapons = await genshinData.weapons();

    return weapons;
  }

  async getOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weapons = await genshinData.weapons({});
    const weapon = weapons.find((c) => c.id === id);

    return weapon;
  }

  async findAll(lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weapons = await genshinData.weapons({
      select: [
        'id',
        'name',
        'description',
        'rarity',
        'type',
        'domain',
        'passive',
        'bonus',
        'refinements',
      ],
    });
    return weapons;
  }

  async findOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const weapons = await genshinData.weapons({});
    const weapon = weapons.find((c) => c.id === id);

    return weapon;
  }
}
