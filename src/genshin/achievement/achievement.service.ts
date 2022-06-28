import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class AchievementService {
  //   constructor();

  async getAll(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const achievements = await genshinData.achievements();

    return achievements;
  }

  async getOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const achievements = await genshinData.achievements({});
    const achievement = achievements.find((c) => c.id === id);

    return achievement;
  }
}
