import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FurnitureRecipe {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  amount: string;
}

@ObjectType()
export class FurnitureCategory {
  @Field(() => Number)
  id: number;

  @Field()
  category: string;

  @Field({ nullable: true })
  type?: string;
}

@ObjectType()
export class Furnishing {
  @Field()
  id: string;

  @Field(() => Number)
  originalId: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => Number, { nullable: true })
  load?: number;

  @Field(() => Number, { nullable: true })
  energy?: number;

  @Field(() => Number, { nullable: true })
  exp?: number;

  @Field(() => [FurnitureCategory])
  category: FurnitureCategory[];

  @Field(() => [FurnitureRecipe], { nullable: true })
  recipe?: FurnitureRecipe[];
}

// {
//   furnishing {
//     id
//     originalId
//     name
//     description
//     rarity
//     load
//     energy
//     exp
//     category {
//       id
//       category
//       type
//     }
//     recipe {
//       id
//       name
//       amount
//     }
//   }
// }
