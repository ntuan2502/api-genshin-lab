import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class CharacterService {
  //   constructor();

  async getAll(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const characters = await genshinData.characters();
    characters.map((c) => {
      c['dob'] = {
        day: c.birthday[0],
        month: c.birthday[1],
      };
    });
    return characters;
  }

  async getOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const characters = await genshinData.characters({});
    const character = characters.find((c) => c.id === id);

    character['dob'] = {
      day: character.birthday[0],
      month: character.birthday[1],
    };

    return character;
  }

  async findAll(lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const characters = await genshinData.characters({
      select: [
        'id',
        'name',
        // 'title',
        // 'description',
        // 'weapon_type',
        // 'element',
        // 'gender',
        // 'substat',
        // 'affiliation',
        // 'region',
        // 'rarity',
        'birthday',
        // 'constellation',
        // 'domain',
        // 'cv',
      ],
    });
    return characters;
  }

  async findOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const characters = await genshinData.characters({});
    const character = characters.find((c) => c.id === id);

    return character;
  }
}
