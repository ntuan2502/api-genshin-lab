import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArtifactSet {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class Artifact {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  min_rarity: number;

  @Field(() => Number)
  max_rarity: number;

  @Field(() => ArtifactSet, { nullable: true })
  flower?: ArtifactSet;

  @Field(() => ArtifactSet, { nullable: true })
  plume?: ArtifactSet;

  @Field(() => ArtifactSet, { nullable: true })
  sands?: ArtifactSet;

  @Field(() => ArtifactSet, { nullable: true })
  goblet?: ArtifactSet;

  @Field(() => ArtifactSet, { nullable: true })
  circlet?: ArtifactSet;

  @Field({ nullable: true })
  one_pc?: string;

  @Field({ nullable: true })
  two_pc?: string;

  @Field({ nullable: true })
  four_pc?: string;
}

// {
//   artifacts {
//     id
//     name
//     min_rarity
//     max_rarity
//     flower {
//       id
//       name
//       description
//     }
//     plume {
//       id
//       name
//       description
//     }
//     sands {
//       id
//       name
//       description
//     }
//     goblet {
//       id
//       name
//       description
//     }
//     circlet {
//       id
//       name
//       description
//     }
//     one_pc
//     two_pc
//     four_pc
//   }
// }
