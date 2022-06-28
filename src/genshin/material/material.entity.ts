import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AscensionMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  amount: number;

  @Field()
  rarity: number;
}

@ObjectType()
export class Item {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Number)
  amount: number;
}

@ObjectType()
export class Craft {
  @Field(() => Number)
  cost: number;

  @Field(() => [Item])
  items: Item[];
}

@ObjectType()
export class CommonMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft, { nullable: true })
  craft?: Craft;
}

// {
//   commonMaterials {
//     id
//     name
//     description
//     source
//     rarity
//     craft{
//       cost items{
//         id name amount
//       }
//     }
//   }
// }

@ObjectType()
export class ElementalStoneMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field(() => Number)
  rarity: number;
}

// {
//   elementalStoneMaterials {
//     id
//     name
//     description
//     source
//     rarity
//   }
// }

@ObjectType()
export class JewelMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft, { nullable: true })
  craft?: Craft;

  @Field(() => [[Item]], { nullable: true })
  convert?: Array<Item[]>;
}

// {
//   jewelsMaterials {
//     id
//     name
//     description
//     source
//     rarity
//     craft {
//       cost
//       items {
//         id
//         name
//         amount
//       }
//     }
//     convert {
//       id
//       name
//       amount
//     }
//   }
// }

@ObjectType()
export class LocalMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field()
  location: string;
}

// {
//   localMaterials {
//     id
//     name
//     description
//     source
//     location
//   }
// }

@ObjectType()
export class Potion {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  effect: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft)
  craft: Craft;
}

// {
//   potions {
//     id
//     name
//     description
//     effect
//     rarity
//     craft {
//       cost
//       items {
//         id
//         name
//         amount
//       }
//     }
//   }
// }

@ObjectType()
export class TalentLvlUpMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field({ nullable: true })
  location?: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft, { nullable: true })
  craft?: Craft;

  @Field({ nullable: true })
  domain?: string;

  @Field(() => [String], { nullable: true })
  days?: string[];
}

// {
//   talentLvlUpMaterials {
//     id
//     name
//     description
//     source
//     location
//     rarity
//     craft {
//       cost
//       items {
//         id
//         name
//         amount
//       }
//     }
//     domain
//     days
//   }
// }

@ObjectType()
export class WeaponPrimaryMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field()
  location: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft, { nullable: true })
  craft?: Craft;

  @Field()
  domain: string;

  @Field(() => [String])
  days: string[];
}

// {
//   weaponPrimaryMaterials {
//     id
//     name
//     description
//     source
//     location
//     rarity
//     craft {
//       cost
//       items {
//         id
//         name
//         amount
//       }
//     }
//     domain
//     days
//   }
// }

@ObjectType()
export class WeaponSecondaryMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  source: string[];

  @Field(() => Number)
  rarity: number;

  @Field(() => Craft, { nullable: true })
  craft?: Craft;
}

// {
//   weaponSecondaryMaterials {
//     id
//     name
//     description
//     source
//     rarity
//     craft {
//       cost
//       items {
//         id
//         name
//         amount
//       }
//     }
//   }
// }

@ObjectType()
export class ExpMaterial {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Number)
  rarity: number;

  @Field(() => Number)
  exp: number;
}

// {
//   characterExpMaterials {
//     id
//     name
//     description
//     rarity
//     exp
//   }
// }

// {
//   weaponExpMaterials {
//     id
//     name
//     description
//     rarity
//     exp
//   }
// }

@ObjectType()
export class Recipe {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Ingredients {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Item], { nullable: true })
  processing?: Item[];

  @Field(() => [Recipe], { nullable: true })
  recipes?: Recipe[];
}

// {
//   ingredients {
//     id
//     name
//     description
//     processing{
//       id name amount
//     }
//     recipes {
//       id
//       name
//     }
//   }
// }
