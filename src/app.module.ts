import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GenshinModule } from './genshin/genshin.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongoModule,
    AuthModule,
    UserModule,
    GenshinModule,
  ],
})
export class AppModule {}
