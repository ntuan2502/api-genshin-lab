import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class FurnishingService {
  //   constructor();

  async getAllFurnishings(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const furnishings = await genshinData.furnishings();

    return furnishings;
  }
}
