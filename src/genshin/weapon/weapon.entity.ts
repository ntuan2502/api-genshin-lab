import { Field, ObjectType } from '@nestjs/graphql';
import { AscensionMaterial } from '../material/material.entity';

@ObjectType()
export class WeaponAscension {
  @Field(() => Number, { nullable: true })
  ascension?: number;

  @Field(() => Number, { nullable: true })
  level?: number;

  @Field(() => Number, { nullable: true })
  cost?: number;

  @Field(() => [AscensionMaterial], { nullable: true })
  materials?: AscensionMaterial[];
}

@ObjectType()
export class WeaponRefinement {
  @Field(() => Number)
  refinement: number;

  @Field()
  desc: string;
}

@ObjectType()
export class StatLevel {
  @Field(() => Number)
  ascension: number;

  @Field(() => Number)
  level: number;

  @Field(() => Number)
  primary: number;

  @Field(() => Number, { nullable: true })
  secondary?: number;
}

@ObjectType()
export class WeaponStat {
  @Field()
  primary: string;

  @Field({ nullable: true })
  secondary?: string;

  @Field(() => [StatLevel])
  levels: StatLevel[];
}

@ObjectType()
export class Weapon {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Number)
  rarity: number;

  @Field()
  type: string;

  @Field()
  domain: string;

  @Field()
  passive: string;

  @Field()
  bonus: string;

  @Field(() => WeaponStat)
  stats: WeaponStat;

  @Field(() => [WeaponAscension])
  ascensions: WeaponAscension[];

  @Field(() => [WeaponAscension])
  refinements: WeaponRefinement[];
}

// {
//   weapons {
//     id
//     name
//     description
//     rarity
//     type
//     domain
//     passive
//     bonus
//     stats {
//       primary
//       secondary
//       levels {
//         ascension
//         level
//         primary
//         secondary
//       }
//     }
//     ascensions {
//       ascension
//       level
//       cost
//       materials {
//         id
//         name
//         amount
//         rarity
//       }
//     }
//     refinements {
//       ascension
//       level
//       cost
//       materials {
//         id
//         name
//         amount
//         rarity
//       }
//     }
//   }
// }
