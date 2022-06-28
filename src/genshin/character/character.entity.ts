import { Field, ObjectType } from '@nestjs/graphql';
import { AscensionMaterial } from '../material/material.entity';

@ObjectType()
export class CharacterVoice {
  @Field()
  english: string;

  @Field()
  chinese: string;

  @Field()
  japanese: string;

  @Field()
  korean: string;
}

@ObjectType()
export class SkillAttribute {
  @Field()
  label: string;

  @Field(() => [String])
  values: string[];
}

@ObjectType()
export class Skill {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  info: string;

  @Field(() => [SkillAttribute])
  attributes: SkillAttribute[];
}

@ObjectType()
export class Passive {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  level: number;
}

@ObjectType()
export class Constellation {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  level: number;
}

@ObjectType()
export class Ascension {
  @Field()
  ascension: number;

  @Field(() => [Number, Number])
  level: [number, number];

  @Field()
  cost: number;

  @Field(() => AscensionMaterial)
  mat1: AscensionMaterial;

  @Field(() => AscensionMaterial, { nullable: true })
  mat2?: AscensionMaterial;

  @Field(() => AscensionMaterial)
  mat3: AscensionMaterial;

  @Field(() => AscensionMaterial)
  mat4: AscensionMaterial;
}

@ObjectType()
export class TalentMaterial {
  @Field()
  level: number;

  @Field()
  cost: number;

  @Field(() => [AscensionMaterial])
  items: AscensionMaterial[];
}

@ObjectType()
export class DOB {
  @Field(() => Number, { nullable: true })
  day?: number;

  @Field(() => Number, { nullable: true })
  month?: number;
}

@ObjectType()
export class Character {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  weapon_type: string;

  @Field()
  element: string;

  @Field()
  gender: string;

  @Field()
  substat: string;

  @Field()
  affiliation: string;

  @Field({ nullable: true })
  region?: string;

  @Field()
  rarity: number;

  @Field(() => DOB)
  dob: DOB;

  @Field()
  constellation: string;

  @Field()
  domain: string;

  @Field(() => CharacterVoice)
  cv: CharacterVoice;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Passive])
  passives: Passive[];

  @Field(() => [Constellation])
  constellations: Constellation[];

  @Field(() => [Ascension])
  ascension: Ascension[];

  @Field(() => [TalentMaterial])
  talent_materials: TalentMaterial[];
}

// {
//   characters {
//     id
//     name
//     title
//     description
//     weapon_type
//     element
//     gender
//     substat
//     affiliation
//     region
//     rarity
//     dob {
//       day
//       month
//     }
//     constellation
//     domain
//     cv {
//       english
//       korean
//       japanese
//       chinese
//     }
//     skills {
//       id
//       name
//       description
//       info
//       attributes {
//         label
//         values
//       }
//     }
//     passives {
//       id
//       name
//       description
//       level
//     }
//     constellations {
//       id
//       name
//       description
//       level
//     }
//     ascension {
//       ascension
//       level
//       cost
//       mat1 {
//         id
//         name
//         amount
//         rarity
//       }
//       mat2 {
//         id
//         name
//         amount
//         rarity
//       }
//       mat3 {
//         id
//         name
//         amount
//         rarity
//       }
//       mat4 {
//         id
//         name
//         amount
//         rarity
//       }
//     }
//     talent_materials {
//       level
//       cost
//       items {
//         id
//         name
//         amount
//         rarity
//       }
//     }
//   }
// }
