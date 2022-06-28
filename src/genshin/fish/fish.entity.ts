import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CraftItem {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  amount: number;
}

@ObjectType()
export class _Craft {
  @Field(() => [CraftItem])
  items: CraftItem[];

  @Field(() => Number)
  result: number;
}

@ObjectType()
export class _Bait {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  rarity: number;
}

@ObjectType()
export class _Fish {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  rarity: number;
}

@ObjectType()
export class Fish {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => [String])
  source: string[];

  @Field(() => _Bait)
  bait: _Bait;
}

// {
//   fish {
//     id
//     name
//     description
//     rarity
//     source
//     bait {
//       id
//       name
//       rarity
//     }
//   }
// }

@ObjectType()
export class FishingRod {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => [String])
  source: string[];
}

// {
//   fishingRods {
//     id
//     name
//     description
//     rarity
//     source
//   }
// }

@ObjectType()
export class Bait {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => _Craft)
  craft: _Craft;

  @Field(() => [_Fish])
  fish: _Fish[];
}

// {
//   baits {
//     id
//     name
//     description
//     rarity
//     fish {
//       id
//       name
//       rarity
//     }
//   }
// }
