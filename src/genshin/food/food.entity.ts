import { Field, ObjectType } from '@nestjs/graphql';
import { Character } from '../character/character.entity';

@ObjectType()
export class Ingredient {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  amount: number;
}

@ObjectType()
export class FoodStatus {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  effect: string;
}

@ObjectType()
export class FoodSpecial {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  effect: string;

  @Field(() => Character)
  character: Character;
}

@ObjectType()
export class FoodResult {
  @Field(() => FoodStatus)
  normal: FoodStatus;

  @Field(() => FoodStatus)
  delicious: FoodStatus;

  @Field(() => FoodStatus)
  suspicious: FoodStatus;

  @Field(() => FoodSpecial, { nullable: true })
  special?: FoodSpecial;
}

@ObjectType()
export class Food {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];

  @Field()
  dish_type: string;

  @Field(() => FoodResult)
  results: FoodResult;

  @Field(() => Number)
  rarity: number;
}

// {
//   foods {
//     id
//     name
//     description
//     ingredients {
//       id
//       name
//       amount
//     }
//     dish_type
//     results {
//       normal {
//         name
//         description
//         effect
//       }
//       delicious {
//         name
//         description
//         effect
//       }
//       suspicious {
//         name
//         description
//         effect
//       }
//       special {
//         name
//         description
//         effect
//         character {
//           id
//           name
//         }
//       }
//     }
//     rarity
//   }
// }
