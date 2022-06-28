import GenshinData from 'genshin-data';
import { Injectable } from '@nestjs/common';
import { localeToLang } from 'src/utils/locale-to-lang';

@Injectable()
export class ArtifactService {
  //   constructor();

  async getAll(lang: string): Promise<any[]> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const artifacts = await genshinData.artifacts();

    return artifacts;
  }

  async getOne(id: string, lang: string): Promise<any> {
    const genshinData = new GenshinData({ language: localeToLang(lang) });
    const artifacts = await genshinData.artifacts({});
    const artifact = artifacts.find((c) => c.id === id);

    return artifact;
  }
}
