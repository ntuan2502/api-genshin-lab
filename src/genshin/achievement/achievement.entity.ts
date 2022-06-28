import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Achievement {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  desc?: string;

  @Field(() => Number)
  reward?: number;

  @Field(() => Boolean)
  hidden?: boolean;

  @Field(() => Number)
  order: number;
}

@ObjectType()
export class AchievementCategory {
  @Field()
  id: string;

  @Field(() => Number, { nullable: true })
  originalId?: number;

  @Field()
  name: string;

  @Field(() => Number)
  order: number;

  @Field(() => [Achievement])
  achievements: Achievement[];
}

// {
//   achievementCategories {
//     id
//     originalId
//     name
//     order
//     achievements {
//       id
//       name
//       desc
//       reward
//       hidden
//       order
//     }
//   }
// }
