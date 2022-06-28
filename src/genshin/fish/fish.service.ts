import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class FishService {
  //   constructor();

  async getAllFish(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const fish = await genshinData.fish();

    return fish;
  }

  async getAllFishingRods(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const fishingRods = await genshinData.fishingRods();

    return fishingRods;
  }

  async getAllBaits(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const baits = await genshinData.baits();

    return baits;
  }
}
