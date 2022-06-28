import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class FoodService {
  //   constructor();

  async getAll(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const foods = await genshinData.food();

    return foods;
  }

  async getOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const foods = await genshinData.food({});
    const food = foods.find((c) => c.id === id);

    return food;
  }
}
